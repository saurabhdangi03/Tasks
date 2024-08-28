// package registerandloginapi.registerandloginapi;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.security.web.SecurityFilterChain;

// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {

//     @SuppressWarnings("unused")
//     @Autowired
//     private UserService userService;

//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//         http
//                 .csrf(csrf -> csrf.disable())  // Disable CSRF protection (only if you have a good reason, like using a non-browser client)
//                 .authorizeHttpRequests((requests) -> requests
//                                 .requestMatchers("/login", "/register").permitAll()  // Allow access to login and register pages without authentication
//                                 .anyRequest().authenticated()  // Require authentication for all other requests
//                 )
//                 .formLogin((form) -> form
//                                 .loginPage("/login")  // Specify the login page URL
//                                 .defaultSuccessUrl("/home", true)  // Redirect to the home page upon successful login
//                                 .permitAll()  // Allow everyone to access the login page
//                 )
//                 .logout((logout) -> logout
//                                 .logoutUrl("/logout")  // Specify the logout URL
//                                 .logoutSuccessUrl("/login?logout")  // Redirect to the login page with a logout message upon successful logout
//                                 .permitAll()  // Allow everyone to access the logout functionality
//                 )
//                 .httpBasic(basic -> basic.disable());  // Disable HTTP Basic Authentication

//         return http.build();
//     }

//     @Bean
//     public PasswordEncoder passwordEncoder() {
//         return new BCryptPasswordEncoder();  // Use BCrypt to hash passwords
//     }
// }

