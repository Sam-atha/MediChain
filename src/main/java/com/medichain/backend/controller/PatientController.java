package com.medichain.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.medichain.backend.entity.Patient;
import com.medichain.backend.service.PatientService;

@RestController
@RequestMapping("/api/patient")
@CrossOrigin(origins="http://localhost:3000")
public class PatientController {

    @Autowired
    private PatientService patientService;

    @PostMapping("/register")
    public String register(@RequestBody Patient patient){
        return patientService.registerPatient(patient);
    }

    @PostMapping("/login")
    public String login(@RequestBody Patient patient){
        return patientService.loginPatient(
                patient.getEmail(),
                patient.getUser().getPassword());
    }
}