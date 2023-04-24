package com.codestates.PreProject_43_008.global.security.auth;

import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.*;
import io.jsonwebtoken.*;

// JWT 생성 및 검증
@Component
public class TokenProvider implements InitializingBean {
    private final Logger logger = LoggerFactory.getLogger(TokenProvider.class);
    private static final String AUTHORITIES_KEY = "auth";
    private String secret;
    private long tokenValidityInMilliseconds;
    private Key key;
    public TokenProvider(
            @Value("${jwt.secret}") String secret,
            @Value("${jwt.token-validity-in-seconds}") long tokenValidityInSeconds) {
        this.secret = secret;
        this.tokenValidityInMilliseconds = tokenValidityInSeconds * 1000;
    }
    @Override
    public void afterPropertiesSet(){
        byte[] keyBytes = Jwtsecret.SECRET.getBytes(StandardCharsets.UTF_8);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }
    // PrincipalDetails 객체 인자로 받아 JWT 토큰 생성.
    // 'claims' 와 'subject' 로 설정
    public String createToken(PrincipalDetails principalDetails) {
        Map<String, Object> claims = createClaims(principalDetails);

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(principalDetails.getMember().getMEMBER_SEQ().toString())
                .setIssuedAt(new Date(System.currentTimeMillis() + Jwtsecret.EXPIRATION_TIMES))
                .signWith(Keys.hmacShaKeyFor(Jwtsecret.SECRET.getBytes()))
                .compact();
    }
    private Map<String, Object> createClaims(PrincipalDetails principalDetails){
        Map<String,Object> claims = new HashMap<>();
        claims.put("MEMBER_SEQ",principalDetails.getMember().getMEMBER_SEQ());
        claims.put("EMAIL", principalDetails.getMember().getEMAIL());
        return claims;
    }
    // JWT 토큰에서 가져온 정보를 기반으로 'Principal' 객체를 생성하고 , 'UsernamePasswordAuthenticationToken' 객체 반환
    public Authentication getAuthentication(String token){
        Claims claims=Jwts
                .parserBuilder()
                .setSigningKey(Jwtsecret.SECRET.getBytes())
                .build()
                .parseClaimsJws(token)
                .getBody();

        Principal principal = new Principal(Long.valueOf(claims.getSubject()),(String) claims.get("EMAIL"));
        return new UsernamePasswordAuthenticationToken(principal, token, null);
    }
    // 주어진 JWT 토큰이 유효한지 검증
    // Jwts.parserBuilder()를 사용하여 JWT 파싱
    // setSigningKey() 메서드를 사용하여 서명키를 설정
    // parseClaimsJws() 메서드 사용하여 Claims 객체를 가져와 예외 처리를 통해 검증 결과 반환
    public boolean validateToken(String token){
        try {
            Jwts.parserBuilder()
                    .setSigningKey(Jwtsecret.SECRET.getBytes())
                    .build()
                    .parseClaimsJws(token);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e){
            logger.info("invalid JWT Authorization.");
        } catch (ExpiredJwtException e){
            logger.info("Expired JWT Authorization.");
        } catch (UnsupportedJwtException e){
            logger.info("Unsupported JWT TOKEN.");
        } catch (IllegalArgumentException e){
            logger.info("Illegal JWT TOKEN.");
        }
        return false;
    }
}
