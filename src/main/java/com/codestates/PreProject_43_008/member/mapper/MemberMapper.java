package com.codestates.PreProject_43_008.member.mapper;

import com.codestates.PreProject_43_008.member.entity.MemberEntity;
import com.codestates.PreProject_43_008.member.dto.MemberDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    MemberEntity memberPostToMember(MemberDto.Post requestBody);
    MemberEntity memberPatchToMember(MemberDto.Patch requestBody);
    MemberEntity memberSignInToMember(MemberDto.SignIn signInDto);
    MemberDto.Response memberToMemberResponse(MemberEntity memberEntity);
    MemberDto.MyPageResponse memberToMemberInfoResponse(MemberEntity memberEntity);

}
