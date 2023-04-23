package com.codestates.answer.service;

import com.codestates.answer.dto.AnswerDto;
import com.codestates.answer.entity.AnswerEntity;
import com.codestates.answer.mapper.AnswerMapper;
import com.codestates.answer.repository.AnswerRepository;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final AnswerMapper answerMapper;

    // 점수, 답변컨텐츠, 멤버,
    public AnswerDto.Post createAnswer(AnswerDto.Post answerPost) {
        //
        AnswerEntity answer = answerMapper.postDtoToEntity(answerPost);
        answerRepository.save(answer);

        return answerPost; // ###
    }


}
