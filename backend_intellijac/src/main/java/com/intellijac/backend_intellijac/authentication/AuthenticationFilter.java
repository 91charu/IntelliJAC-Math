package com.intellijac.backend_intellijac.authentication;

import com.intellijac.backend_intellijac.User;
import com.intellijac.backend_intellijac.controllers.AuthenticationController;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
import org.springframework.web.servlet.HandlerInterceptor;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class AuthenticationFilter implements HandlerInterceptor {

    @Autowired
    AuthenticationController authenticationController;

    private static final List<String> whitelist = Arrays.asList("/welcome", "/register", "/login", "/css", "/images");

    private static boolean isWhitelisted(String path) {
        for (String pathRoot : whitelist) {
            if (path.equals("/") || path.startsWith(pathRoot)) {
                return true;
            }
        }

        return false;
    }
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {

        if(isWhitelisted(request.getRequestURI())){
            return true;
        }

        HttpSession session = request.getSession();
        User user = authenticationController.getUserFormSession(session);

        if(user!=null){
            return true;
        }

        response.sendRedirect("/login");
        return false;
    }
}
