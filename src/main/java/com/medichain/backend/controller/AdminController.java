package com.medichain.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.medichain.backend.entity.Admin;
import com.medichain.backend.service.AdminService;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private AdminService adminService;

    // ================= REGISTER =================

    @PostMapping("/register")
    public String register(@RequestBody Admin admin) {

        return adminService.registerAdmin(admin);

    }

    // ================= LOGIN =================

    @PostMapping("/login")
    public String login(@RequestBody Admin admin) {

        return adminService.loginAdmin(
                admin.getAdminId(),
                admin.getUser().getPassword());

    }

}