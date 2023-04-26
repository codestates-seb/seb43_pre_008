package com.codestates.PreProject_43_008.member.service.impl;

import com.codestates.PreProject_43_008.member.dto.MemberDto;
import com.codestates.PreProject_43_008.member.entity.MemberEntity;
import com.codestates.PreProject_43_008.member.repository.MemberRepository;
import com.codestates.PreProject_43_008.member.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class MemberServiceImpl implements MemberService {
    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public MemberEntity registerMember(MemberDto.Post signUpRequest){
        MemberEntity newMember = new MemberEntity();
        newMember.setEMAIL(signUpRequest.getEMAIL());
        newMember.setPASSWORD(passwordEncoder.encode(signUpRequest.getPASSWORD()));
        newMember.setNICK_NAME(signUpRequest.getNICK_NAME());

        return memberRepository.save(newMember);
    }
    @Override
    public boolean emailExists(String email){
        return memberRepository.findByEMAIL(email).isPresent();
    }


    @Override
    public List<MemberDto.Response> getAllMembers() {
        return memberRepository.findAll().stream().map(member -> new MemberDto.Response(member.getMEMBER_SEQ(), member.getEMAIL(), member.getNICK_NAME())).collect(Collectors.toList());
    }

    @Override
    public MemberDto.Response getMemberById(Long id) {
        MemberEntity member = memberRepository.findById(id).orElseThrow(() -> new RuntimeException("멤버를 찾을 수 없습니다."));
        return new MemberDto.Response(member.getMEMBER_SEQ(), member.getEMAIL(), member.getNICK_NAME());
    }

    @Override
    public MemberEntity updateMember(Long id, MemberDto.Put updateRequest) {
        MemberEntity existingMember = memberRepository.findById(id).orElseThrow(() -> new RuntimeException("멤버를 찾을 수 없습니다."));
        existingMember.setEMAIL(updateRequest.getEMAIL());
        existingMember.setNICK_NAME(updateRequest.getNICK_NAME());
        return memberRepository.save(existingMember);
    }

    @Override
    public void deleteMember(Long id) {
        memberRepository.deleteById(id);
    }
}
