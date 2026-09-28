package com.medichain.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.medichain.backend.entity.Doctor;
import com.medichain.backend.service.DoctorService;

@RestController
@RequestMapping("/api/doctor")
@CrossOrigin(origins = "http://localhost:3000")
public class DoctorController {

    @Autowired
    private DoctorService doctorService;

    @PostMapping("/register")
    public String register(@RequestBody Doctor doctor){

        return doctorService.registerDoctor(doctor);

    }

    @PostMapping("/login")
    public String login(@RequestBody Doctor doctor){

        return doctorService.loginDoctor(
                doctor.getDoctorId(),
                doctor.getUser().getPassword());

    }

}