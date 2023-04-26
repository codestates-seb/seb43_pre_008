package com.codestates.PreProject_43_008.member.controller;

import com.codestates.PreProject_43_008.member.dto.MemberDto;
import com.codestates.PreProject_43_008.member.entity.MemberEntity;
import com.codestates.PreProject_43_008.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/profile")
public class ProfileController {
    @Autowired
    private MemberService memberService;

    @GetMapping("/{NICK_NAME}")
    public ResponseEntity<MemberDto.Response> getUserProfile(@PathVariable Long MEMBER_SEQ){
        MemberDto.Response member = memberService.getMemberById(MEMBER_SEQ);
        return ResponseEntity.ok(member);

    }
}
