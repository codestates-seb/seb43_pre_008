package com.codestates.PreProject_43_008.member.controller;

import com.codestates.PreProject_43_008.global.dto.SingleResponseDto;
import com.codestates.PreProject_43_008.global.security.Loginresolver.LoginAccountId;
import com.codestates.PreProject_43_008.member.entity.MemberEntity;
import com.codestates.PreProject_43_008.member.mapper.MemberMapper;
import com.codestates.PreProject_43_008.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.codestates.PreProject_43_008.member.dto.MemberDto;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

@RestController
@Validated
@CrossOrigin
public class MemberController {
    private MemberService memberService;
    private MemberMapper memberMapper;

    @Autowired
    public MemberController(MemberService memberService, MemberMapper memberMapper) {
        this.memberService = memberService;
        this.memberMapper = memberMapper;
    }

    // 회원 가입
    @PostMapping("/api/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody) {
        MemberEntity member = memberMapper.memberPostToMember(requestBody);
        MemberEntity createdMember = memberService.createMember(member);
        MemberDto.Response response = memberMapper.memberToMemberResponse(createdMember);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED); // SingleResponseDto 생성
    }

    // 회원 정보 수정
    @PatchMapping("/api/user/{userId}")
    public ResponseEntity patchMember(@Valid @RequestBody MemberDto.Patch requestBody,
                                      @LoginAccountId Long MEMBER_SEQ){
        requestBody.setMEMBER_SEQ(MEMBER_SEQ);

        MemberEntity memberSeq=
                memberService.updateMember(memberMapper.memberPatchToMember(requestBody));

        return new ResponseEntity<>(new SingleResponseDto<>(memberMapper.memberToMemberResponse(memberSeq)),HttpStatus.OK);

    }

    // 회원 정보 조회
    @GetMapping("/api/users?page=1&size=10")
    public ResponseEntity getMember(@PathVariable Long MEMBER_SEQ) {
        MemberEntity member = memberService.findMember(MEMBER_SEQ);
        return new ResponseEntity(new SingleResponseDto<>(memberMapper.memberToMemberResponse(member)), HttpStatus.OK);
    }
    // getMyInfo
/*    @GetMapping("/members/user/{MEMBER_SEQ}")
    public ResponseEntity getMyInfo(@PathVariable Long MEMBER_SEQ){
        MemberEntity member = memberService.findMember(MEMBER_SEQ);
        MemberDto.MyPageResponse response = memberMapper.memberToMemberInfoResponse(member);
        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }*/

    // logout
    @GetMapping("/api/logout")
    public ResponseEntity logout(HttpServletRequest request) {
        HttpSession session = request.getSession();

        session.invalidate();

        return new ResponseEntity<>(HttpStatus.OK);
    }
    //회원 탈퇴
    @DeleteMapping("/api/user/{userId}")
    public ResponseEntity deleteMember(@LoginAccountId Long MEMBER_SEQ){
        memberService.deleteMember(MEMBER_SEQ);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
