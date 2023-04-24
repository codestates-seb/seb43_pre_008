package com.codestates.PreProject_43_008.global.security.handler;

import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response
    ,org.springframework.security.core.AuthenticationException authenticationException) throws IOException, ServletException{
    response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
    }
}
