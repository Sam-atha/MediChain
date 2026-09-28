package com.medichain.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.medichain.backend.entity.Laboratory;
import com.medichain.backend.service.LaboratoryService;

@RestController
@RequestMapping("/api/lab")
@CrossOrigin(origins = "http://localhost:3000")
public class LaboratoryController {

    @Autowired
    private LaboratoryService laboratoryService;

    @PostMapping("/register")
    public String register(@RequestBody Laboratory lab){

        return laboratoryService.registerLab(lab);

    }

    @PostMapping("/login")
    public String login(@RequestBody Laboratory lab){

        return laboratoryService.loginLab(
                lab.getLabId(),
                lab.getUser().getPassword());

    }

}