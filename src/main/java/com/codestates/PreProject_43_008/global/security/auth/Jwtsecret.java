package com.codestates.PreProject_43_008.global.security.auth;

import io.jsonwebtoken.security.Keys;
import javax.crypto.SecretKey;
public interface Jwtsecret {
    // 시크릿 키 코드
    String SECRET = "XKjwKO8uVLhoK3MTCAa3qLxcgQVcShtt8RD7utpGJq7WmE80SRwz94WtFvfOZwKh4Ioj7nd4FBqdngLr6tLeqmNuPQoOOm2SHzB5YcmIwmzGB7KHniArWMtqKklK8QD3k0srP0dCJ85ZtsYhJ8QdaOzdIfndwraZMAfHnFes3EY31X0wQgWKfFYUPpKQ4Zhp3froY4Oyl3xkJFiButGdGZpoI3dtlcT7dp0obsurWA13JlN0sXoydTah5Rp8HLb3";
    // JWT 만료 시간 / 24시간
    int EXPIRATION_TIMES = 24*60*60*1000;
    // JWT 를 HTTP 요청 헤더에 담아 전송할 때 사용되는 헤더 이름
    String HEADER = "Authorization";
}
