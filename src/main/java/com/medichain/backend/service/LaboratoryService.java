package com.medichain.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.medichain.backend.entity.Laboratory;
import com.medichain.backend.entity.User;
import com.medichain.backend.repository.LaboratoryRepository;
import com.medichain.backend.repository.UserRepository;

@Service
public class LaboratoryService {

    @Autowired
    private LaboratoryRepository laboratoryRepository;

    @Autowired
    private UserRepository userRepository;

    // ================= REGISTER =================

    public String registerLab(Laboratory lab) {

        if (laboratoryRepository.existsByLabId(lab.getLabId())) {
            return "Laboratory ID already exists";
        }

        User user = lab.getUser();

        user.setRole("LAB");

        userRepository.save(user);

        lab.setUser(user);

        laboratoryRepository.save(lab);

        return "Laboratory Registered Successfully";
    }

    // ================= LOGIN =================

    public String loginLab(String labId, String password) {

        Laboratory lab = laboratoryRepository.findByLabId(labId).orElse(null);

        if (lab == null) {
            return "Laboratory Not Found";
        }

        if (!lab.getUser().getPassword().equals(password)) {
            return "Invalid Password";
        }

        return "Login Successful";
    }

}