package com.registrationformapi.registrationformapi;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())  // Disable CSRF protection
                .authorizeHttpRequests((requests) -> requests
                                .requestMatchers("/api/users").permitAll()  // Allow access to the users endpoint
                                .requestMatchers("/api/users/**").permitAll()  // Allow access to the users endpoint with any ID
                                .anyRequest().authenticated()  // Require authentication for all other requests
                )
                .formLogin(login -> login.disable())  // Disable form login
                .httpBasic(basic -> basic.disable());  // Disable basic authentication

        return http.build();
    }
}

// package com.registrationformapi.registrationformapi;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.core.userdetails.UserDetailsService;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//         http
//             .csrf(csrf -> csrf.disable())  // Disable CSRF protection (enable it in production)
//             .authorizeHttpRequests((requests) -> requests
//                 .requestMatchers("/login", "/register", "/styles.css").permitAll()  // Allow access to login, register, and CSS
//                 .anyRequest().authenticated()  // Require authentication for all other requests
//             )
//             .formLogin(form -> form
//                 .loginPage("/login")  // Custom login page
//                 .defaultSuccessUrl("/welcome", true)  // Redirect to /welcome on successful login
//                 .permitAll()
//             )
//             .logout(logout -> logout
//                 .logoutUrl("/logout")
//                 .logoutSuccessUrl("/login?logout")  // Redirect to login page on logout
//                 .permitAll()
//             );
        
//         return http.build();
//     }

//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();  // Password encoder for hashing passwords
//     }

//     @Bean
//     public UserDetailsService userDetailsService() {
//         return new CustomUserDetailsService();  // Use the custom UserDetailsService
//     }
// }
