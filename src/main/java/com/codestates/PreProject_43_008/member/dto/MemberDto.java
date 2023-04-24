package com.codestates.PreProject_43_008.member.dto;

import com.codestates.PreProject_43_008.member.entity.MemberEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;


public class MemberDto {
    @Getter
    @AllArgsConstructor // 테스트
    public static class Post {
        @NotBlank
        @Email
        private String EMAIL;

        @NotBlank(message = "비밀번호 입력은 필수입니다.")
        private String PASSWORD;

        @NotBlank
        private String NICK_NAME;
    }
    @Getter
    @Setter
    @AllArgsConstructor // 테스트
    public static class Patch {
        private Long MEMBER_SEQ;
        private String NICK_NAME;
        private String img;
        private String about;
        private MemberEntity.Roles roles;
    }

    @AllArgsConstructor
    @Getter
    public static class SignIn {
        @NotBlank
        private String EMAIL;
        @NotEmpty
        private String PASSWORD;
//        private MemberEntity.Roles roles = MemberEntity.Roles.MEMBER_ACTIVE;
        private String roles = MemberEntity.Roles.MEMBER_ACTIVE.name();
    }
    @AllArgsConstructor
    @Getter
    public static class Response{
        private Long MEMBER_SEQ;
        private String EMAIL;
        private String NICK_NAME;
        private String about;
        private String img;
    }

    @AllArgsConstructor
    @Getter
    public static class MyPageResponse{
        private Long MEMBER_SEQ;
        private String EMAIL;
        private String NICK_NAME;
        private String about;
        private String img;
    }
}
