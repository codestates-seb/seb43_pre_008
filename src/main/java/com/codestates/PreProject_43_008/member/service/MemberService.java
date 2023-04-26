package com.codestates.PreProject_43_008.member.service;

import com.codestates.PreProject_43_008.member.dto.MemberDto;
import com.codestates.PreProject_43_008.member.entity.MemberEntity;

import java.util.*;

public interface MemberService {
    MemberEntity registerMember(MemberDto.Post signUpRequest);
    boolean emailExists(String email);
    List<MemberDto.Response> getAllMembers();
    MemberDto.Response getMemberById(Long id);
    MemberEntity updateMember(Long id, MemberDto.Put updateRequest);
    void deleteMember(Long id);
}
