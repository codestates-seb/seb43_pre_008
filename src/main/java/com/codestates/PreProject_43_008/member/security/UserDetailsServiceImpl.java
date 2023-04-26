package com.codestates.PreProject_43_008.member.security;

import com.codestates.PreProject_43_008.member.entity.MemberEntity;
import com.codestates.PreProject_43_008.member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User;

import java.util.Collections;
import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    private MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException{
        Optional<MemberEntity> optionalMember = memberRepository.findByEMAIL(email);

        if (!optionalMember.isPresent()){
            throw new UsernameNotFoundException("이메일이 일치하는 유저가 없습니다.");
        }
        MemberEntity member = optionalMember.get();
        GrantedAuthority authority = new SimpleGrantedAuthority("ROLE_USER");
        return new User(member.getEMAIL(), member.getPASSWORD(), Collections.singletonList(authority));
    }
}
