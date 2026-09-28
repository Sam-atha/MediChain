package com.medichain.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medichain.backend.entity.Doctor;
import com.medichain.backend.entity.User;
import com.medichain.backend.repository.DoctorRepository;
import com.medichain.backend.repository.UserRepository;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private UserRepository userRepository;

    // ================= REGISTER =================

    public String registerDoctor(Doctor doctor) {

        if (doctorRepository.existsByDoctorId(doctor.getDoctorId())) {
            return "Doctor ID already exists";
        }

        User user = doctor.getUser();

        user.setRole("DOCTOR");

        userRepository.save(user);

        doctor.setUser(user);

        doctorRepository.save(doctor);

        return "Doctor Registered Successfully";
    }

    // ================= LOGIN =================

    public String loginDoctor(String doctorId, String password) {

        Doctor doctor = doctorRepository.findByDoctorId(doctorId).orElse(null);

        if (doctor == null) {
            return "Doctor Not Found";
        }

        if (!doctor.getUser().getPassword().equals(password)) {
            return "Invalid Password";
        }

        return "Login Successful";
    }

}