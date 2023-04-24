package com.codestates.PreProject_43_008.global.security.auth;

import com.codestates.PreProject_43_008.member.entity.MemberEntity;
import com.codestates.PreProject_43_008.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberDetailService implements UserDetailsService {
    private final MemberRepository memberRepository;
    // EMAIL 을 기준으로 회원 정보를 조회
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String EMAIL) throws UsernameNotFoundException {
        // MemberRepository를 주입받아 findByEMAIL() 메서드를 이용하여 Optional<MemberEntity> 타입의 회원 정보를 조회하고
        Optional<MemberEntity> member = memberRepository.findByEMAIL(EMAIL);
        //  이를 'PrincipalDetails'클래스의 객체로 변환하여 반환
        return new PrincipalDetails(member.get());
    }
}
