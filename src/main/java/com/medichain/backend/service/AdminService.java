package com.medichain.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medichain.backend.entity.Admin;
import com.medichain.backend.entity.User;
import com.medichain.backend.repository.AdminRepository;
import com.medichain.backend.repository.UserRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private UserRepository userRepository;

    // ================= REGISTER =================

    public String registerAdmin(Admin admin) {

        if (adminRepository.findByAdminId(admin.getAdminId()).isPresent()) {
            return "Admin ID already exists";
        }

        User user = admin.getUser();

        user.setRole("ADMIN");

        userRepository.save(user);

        admin.setUser(user);

        adminRepository.save(admin);

        return "Admin Registered Successfully";
    }

    // ================= LOGIN =================

    public String loginAdmin(String adminId, String password) {

        Admin admin = adminRepository.findByAdminId(adminId).orElse(null);

        if (admin == null) {
            return "Admin Not Found";
        }

        if (!admin.getUser().getPassword().equals(password)) {
            return "Invalid Password";
        }

        return "Login Successful";
    }

}