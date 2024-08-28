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


package com.registrationformapi.registrationformapi;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public UserDetailsService userDetailsService() {
        return new CustomUserDetailsService();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // Disable CSRF protection
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/users/login", "/api/users").permitAll() // Allow access to login and registration endpoints
                .anyRequest().authenticated() // All other requests require authentication
            )
            .formLogin(form -> form
                .loginPage("/api/users/login") // Custom login page
                .permitAll() // Allow everyone to see the login page
            )
            .logout(logout -> logout
                .permitAll() // Allow everyone to logout
            );

        return http.build();
    }
}
