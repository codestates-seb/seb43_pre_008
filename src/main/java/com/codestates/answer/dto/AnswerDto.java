package com.codestates.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

public class AnswerDto {

    @Getter
    @Setter
    public static class Post {
        @NotBlank(message = "Content is missing.")
        private String answerContent;
    }


}
