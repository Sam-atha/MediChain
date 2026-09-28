package com.medichain.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medichain.backend.entity.Patient;
import com.medichain.backend.entity.User;
import com.medichain.backend.repository.PatientRepository;
import com.medichain.backend.repository.UserRepository;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private UserRepository userRepository;

    public String registerPatient(Patient patient) {

        if (patientRepository.existsByEmail(patient.getEmail())) {
            return "Email already exists";
        }

        User user = patient.getUser();

        user.setRole("PATIENT");

        // Copy patient details into users table
        user.setEmail(patient.getEmail());
        user.setName(patient.getName());
        user.setPhone(patient.getPhone());
        user.setAadhaarNumber(patient.getAadhaarNumber());

        userRepository.save(user);

        patient.setUser(user);

        patientRepository.save(patient);

        return "Patient Registered Successfully";
    }

    public String loginPatient(String email, String password) {

        Patient patient = patientRepository.findByEmail(email).orElse(null);

        if (patient == null) {
            return "Patient Not Found";
        }

        if (!patient.getUser().getPassword().equals(password)) {
            return "Invalid Password";
        }

        return "Login Successful";
    }
}