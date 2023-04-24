package com.codestates.PreProject_43_008.member.dto;

import com.codestates.PreProject_43_008.member.entity.MemberEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MemberPatchDto {
    private Long MEMBER_SEQ;
    private String NICK_NAME;
    private String img;
    private String about;
    private MemberEntity.Roles roles;
}
