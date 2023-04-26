package com.codestates.PreProject_43_008.member.controller;

import com.codestates.PreProject_43_008.member.dto.MemberDto;
import com.codestates.PreProject_43_008.member.entity.MemberEntity;
import com.codestates.PreProject_43_008.member.security.JwtUtils;
import com.codestates.PreProject_43_008.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.core.userdetails.User;
import java.util.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class MemberController {
    @Autowired
    private MemberService memberService;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody @Valid MemberDto.Post signUpRequest){
        if (memberService.emailExists(signUpRequest.getEMAIL())){
            return ResponseEntity.badRequest().body("이미 사용 중인 이메일입니다.");
        }
        MemberEntity savedMember = memberService.registerMember(signUpRequest);
        MemberDto.Response memberResponse = new MemberDto.Response(savedMember.getMEMBER_SEQ(), savedMember.getEMAIL(), savedMember.getNICK_NAME());

        return ResponseEntity.ok(memberResponse);
    }
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody @Valid MemberDto.Login loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEMAIL(), loginRequest.getPASSWORD()));

        String jwt = jwtUtils.generateJwtToken(authentication);
        UserDetails userDetails = (User) authentication.getPrincipal();

        return ResponseEntity.ok(new MemberDto.LoginResponse(jwt, userDetails.getUsername()));
    }
    @GetMapping("/members")
    public ResponseEntity<List<MemberDto.Response>> getAllMembers() {
        return ResponseEntity.ok(memberService.getAllMembers());
    }

    @GetMapping("/user/{MEMBER_SEQ}")
    public ResponseEntity<MemberDto.Response> getMemberById(@PathVariable Long MEMBER_SEQ) {
        return ResponseEntity.ok(memberService.getMemberById(MEMBER_SEQ));
    }

    @PutMapping("/user/{MEMBER_SEQ}")
    public ResponseEntity<MemberEntity> updateMember(@PathVariable Long MEMBER_SEQ, @RequestBody MemberDto.Put updateRequest) {
        return ResponseEntity.ok(memberService.updateMember(MEMBER_SEQ, updateRequest));
    }

    @DeleteMapping("/user/{MEMBER_SEQ}")
    public ResponseEntity<Void> deleteMember(@PathVariable Long MEMBER_SEQ) {
        memberService.deleteMember(MEMBER_SEQ);
        return ResponseEntity.ok().build();
    }

}
