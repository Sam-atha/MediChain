package com.medichain.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medichain.backend.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{

    Optional<Admin> findByAdminId(String adminId);

    boolean existsByAdminId(String adminId);

}