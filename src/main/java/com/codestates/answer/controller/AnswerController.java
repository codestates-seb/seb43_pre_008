package com.codestates.answer.controller;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.service.AnswerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/question")
@RequiredArgsConstructor
public class AnswerController {
    private final AnswerService answerService;

    @PostMapping("/{question}/answer")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post answerPost) {
        answerService.createAnswer(answerPost);
        return ResponseEntity.status(HttpStatus.CREATED).body(answerPost);
    }


}
