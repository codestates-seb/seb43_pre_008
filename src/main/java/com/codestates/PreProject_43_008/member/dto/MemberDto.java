package com.codestates.PreProject_43_008.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        @NotBlank
        @Email
        private String EMAIL;
        @NotBlank
        private String PASSWORD;
        @NotBlank
        private String NICK_NAME;
    }

    @AllArgsConstructor
    @Getter
    public static class Response{
        private Long MEMBER_SEQ;
        private String EMAIL;
        private String NICK_NAME;
    }
    @Getter
    @AllArgsConstructor
    public static class Put {
        @NotBlank
        @Email
        private String EMAIL;
        @NotBlank
        private String NICK_NAME;
    }

    @Getter
    @AllArgsConstructor
    public static class Login {
        @NotBlank
        @Email
        private String EMAIL;
        @NotBlank
        private String PASSWORD;
    }

    @AllArgsConstructor
    @Getter
    public static class LoginResponse {
        private String token;
        private String email;
    }
}
