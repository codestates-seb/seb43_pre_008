package com.codestates.PreProject_43_008.member.dto;

import com.codestates.PreProject_43_008.member.entity.MemberEntity;
public class MemberResponseDto {
    private Long MEMBER_SEQ;
    private String EMAIL;
    private String about;
    private String img;
    private MemberEntity.Roles roles;
}
