package com.codestates.PreProject_43_008.member.dto;

import com.codestates.PreProject_43_008.member.entity.MemberEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MemberSigninDto {
    @NotBlank
    private String EMAIL;
    private String PASSWORD;
    private MemberEntity.Roles roles = MemberEntity.Roles.MEMBER_ACTIVE;
}
