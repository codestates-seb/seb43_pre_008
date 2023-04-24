package com.codestates.PreProject_43_008.member.service;

import com.codestates.PreProject_43_008.member.entity.MemberEntity;
import com.codestates.PreProject_43_008.member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private PasswordEncoder passwordEncoder;
    @Autowired
    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder){
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public MemberEntity createMember(MemberEntity member){
        String encryptedPassword; // 패스워드 암호화
        encryptedPassword = passwordEncoder.encode(member.getPASSWORD());
        member.setPASSWORD(encryptedPassword); // 암호화된 패스워드 재할당

        MemberEntity savedMember = memberRepository.save(member);

        return savedMember;
    }

/*    public void verifyExistEMAIL(String EMAIL){
        Optional<MemberEntity> member = memberRepository.findByEMAIL(EMAIL);
//        if (member.isPresent())// 이미 등록된 회원이면
//            throw new
    }
*/
/*    @Transactional
    public MemberEntity findVerifiedMemberByEMAIL (String EMAIL){
        Optional<MemberEntity> optionalMember = memberRepository.findByEMAIL(EMAIL);
    } */

    // 회원 정보 수정
    @Transactional
    public MemberEntity updateMember(MemberEntity memberEntity) {
        MemberEntity findMember = findVerifiedMember(memberEntity.getMEMBER_SEQ());

        Optional.ofNullable(memberEntity.getNICK_NAME())
                .ifPresent(NICK_NAME -> findMember.setNICK_NAME(NICK_NAME));
        Optional.ofNullable(memberEntity.getImg())
                .ifPresent(img->findMember.setImg(img));
        Optional.ofNullable(memberEntity.getAbout())
                .ifPresent(about->findMember.setAbout(about));
        Optional.ofNullable(memberEntity.getRoles())
                .ifPresent(roles -> findMember.setRoles(roles));

        return memberRepository.save(findMember);
    }

    public MemberEntity findMember(Long MEMBER_SEQ) { return findVerifiedMember(MEMBER_SEQ);}

    public MemberEntity findVerifiedMember(Long MEMBER_SEQ){
        Optional<MemberEntity> optionalMember = memberRepository.findById(MEMBER_SEQ);

//        MemberEntity findMember = optionalMember.orElseThrow(() ->                new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

//        return findMember;
        return null; // 오류 문제로 주석처리
    }

    //멤버 탈퇴
    public void deleteMember(Long MEMBER_SEQ){
        MemberEntity findMember = findVerifiedMember(MEMBER_SEQ);

        memberRepository.delete(findMember);
    }
}
