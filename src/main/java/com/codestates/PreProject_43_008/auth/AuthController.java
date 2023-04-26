package com.codestates.PreProject_43_008.auth;

import com.codestates.PreProject_43_008.member.security.RefreshTokenRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.codestates.PreProject_43_008.member.security.JwtResponse;

import javax.validation.Valid;
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private RefreshTokenRequest refreshTokenRequest;
    @Autowired
    private AuthService authService;
    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(@Valid @RequestBody RefreshTokenRequest refreshTokenRequest){
        String newAccessToken = authService.refreshToken(refreshTokenRequest);
        return ResponseEntity.ok(new JwtResponse(newAccessToken));
    }
}
