package com.medichain.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medichain.backend.entity.User;
import com.medichain.backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String registerUser(User user) {

        if (userRepository.existsByUsername(user.getUsername())) {
            return "Username already exists";
        }

        userRepository.save(user);

        return "Registration Successful";
    }

    public String loginUser(String username, String password, String role) {

        User user = userRepository.findByUsername(username).orElse(null);

        if (user == null)
            return "User Not Found";

        if (!user.getPassword().equals(password))
            return "Invalid Password";

        if (!user.getRole().equalsIgnoreCase(role))
            return "Incorrect Role Selected";

        return "Login Successful";
    }
}