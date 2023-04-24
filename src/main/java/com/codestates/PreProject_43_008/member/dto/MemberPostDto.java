package com.codestates.PreProject_43_008.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberPostDto {
    @NotBlank
    @Email
    private String EMAIL;

    @NotBlank
    private String PASSWORD;

    @NotBlank
    private String NICK_NAME;
}
