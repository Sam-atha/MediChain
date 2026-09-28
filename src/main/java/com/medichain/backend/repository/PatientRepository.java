package com.medichain.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medichain.backend.entity.Patient;

public interface PatientRepository extends JpaRepository<Patient, Long>{

    Optional<Patient> findByEmail(String email);

    boolean existsByEmail(String email);

}