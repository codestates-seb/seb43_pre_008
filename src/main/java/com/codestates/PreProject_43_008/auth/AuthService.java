package com.codestates.PreProject_43_008.auth;

import com.codestates.PreProject_43_008.member.security.JwtUtils;
import com.codestates.PreProject_43_008.member.security.RefreshTokenRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private JwtUtils jwtUtils;
    public String refreshToken(RefreshTokenRequest refreshTokenRequest) {
        String refreshToken = refreshTokenRequest.getToken();
        Long MEMBER_SEQ = jwtUtils.getMemberSeqFromRefreshToken(refreshToken);
        if (jwtUtils.validateRefreshToken(refreshToken)) {
            return jwtUtils.generateJwtToken(MEMBER_SEQ);
        } else {
            throw new IllegalArgumentException("만료된 리프레쉬 토큰입니다.");
        }
    }
}
