package com.registrationformapi.registrationformapi;


import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
    User findByEmail(String email);
}

// package com.registrationformapi.registrationformapi;

// import org.springframework.data.jpa.repository.JpaRepository;
// import java.util.Optional;

// public interface UserRepository extends JpaRepository<User, Long> {
//     Optional<User> findByEmail(String email);  // Add this method
//     boolean existsByEmail(String email);
// }
