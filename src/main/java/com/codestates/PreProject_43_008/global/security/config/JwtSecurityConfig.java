package com.codestates.PreProject_43_008.global.security.config;

import antlr.Token;
import com.codestates.PreProject_43_008.global.security.auth.TokenProvider;
import com.codestates.PreProject_43_008.global.security.filter.JwtFilter;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
@Configuration
public class JwtSecurityConfig extends SecurityConfigurerAdapter <DefaultSecurityFilterChain, HttpSecurity> {
    private TokenProvider tokenProvider;
    public JwtSecurityConfig(TokenProvider tokenProvider){
        this.tokenProvider = tokenProvider;
    }
    @Override
    public void configure(HttpSecurity httpSecurity) throws Exception{
        JwtFilter customFilter= new JwtFilter(tokenProvider);
        httpSecurity.addFilterBefore(customFilter, UsernamePasswordAuthenticationFilter.class);
    }
}
