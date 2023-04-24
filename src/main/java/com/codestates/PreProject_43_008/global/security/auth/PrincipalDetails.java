package com.codestates.PreProject_43_008.global.security.auth;

import com.codestates.PreProject_43_008.member.entity.MemberEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;

public class PrincipalDetails implements UserDetails {
    private MemberEntity member;
    public PrincipalDetails(MemberEntity member){
        this.member=member;
    }
    public MemberEntity getMember() {return member;}

    @Override
    // Collection<GrantedAuthority> 객체를 생성
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();

        authorities.add(()-> String.valueOf(member.getRoles()));
        return authorities;
    }
    @Override
    public String getPassword() {return member.getPASSWORD();}
    @Override
    public String getUsername() {return member.getNICK_NAME();}
    @Override
    public boolean isAccountNonExpired() {return true;}

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {return true;}
    @Override
    public boolean isEnabled() {return true;}
}
