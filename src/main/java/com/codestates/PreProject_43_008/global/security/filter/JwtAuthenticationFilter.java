package com.codestates.PreProject_43_008.global.security.filter;

import antlr.Token;
import com.codestates.PreProject_43_008.global.security.auth.Jwtsecret;
import com.codestates.PreProject_43_008.global.security.auth.PrincipalDetails;
import com.codestates.PreProject_43_008.global.security.auth.TokenProvider;
import com.codestates.PreProject_43_008.member.dto.MemberSigninDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final TokenProvider tokenProvider;
    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, TokenProvider tokenProvider){
        this.setFilterProcessesUrl("/signIn");
        this.authenticationManager=authenticationManager;
        this.tokenProvider=tokenProvider;
    }
    @SneakyThrows
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException{
        log.info("USERNAMEPASSWORD_FILTER");

        ObjectMapper objectMapper = new ObjectMapper();
        MemberSigninDto signinDto = objectMapper.readValue(request.getInputStream(), MemberSigninDto.class);

        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(signinDto.getEMAIL(), signinDto.getPASSWORD());
        Authentication authentication = authenticationManager.authenticate(authenticationToken);

        return authentication;
    }
    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain filterChain,
                                            Authentication authentication) throws IOException{
        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();

        String JwtToken = tokenProvider.createToken(principalDetails);

        response.setHeader("Access-Control-Allow-Origin","*");
        response.addHeader(Jwtsecret.HEADER,"Bearer "+JwtToken);
        response.setHeader("content-type","application/json");

        response.getWriter().write(principalDetails.getMember().getMEMBER_SEQ().toString());
    }
}
