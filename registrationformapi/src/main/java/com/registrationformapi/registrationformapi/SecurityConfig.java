// package com.registrationformapi.registrationformapi;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//         http
//                 .csrf(csrf -> csrf.disable())  // Disable CSRF protection
//                 .authorizeHttpRequests((requests) -> requests
//                                 .requestMatchers("/api/users").permitAll()  // Allow access to the users endpoint
//                                 .requestMatchers("/api/users/**").permitAll()  // Allow access to the users endpoint with any ID
//                                 .anyRequest().authenticated()  // Require authentication for all other requests
//                 )
//                 .formLogin(login -> login.disable())  // Disable form login
//                 .httpBasic(basic -> basic.disable());  // Disable basic authentication

//         return http.build();
//     }
// }
