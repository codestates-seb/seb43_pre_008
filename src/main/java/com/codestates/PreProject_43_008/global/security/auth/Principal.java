package com.codestates.PreProject_43_008.global.security.auth;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
// 인증된 사용자의 id와 email 정보를 저장.
// 사용자가 인증되어 로그인 한 후 인증 성공 시 Spring Security의 Authentication 객체에 포함됨
public class Principal {
    private Long id;
    private String EMAIL;
}
