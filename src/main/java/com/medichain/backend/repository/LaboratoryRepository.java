package com.medichain.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medichain.backend.entity.Laboratory;

public interface LaboratoryRepository extends JpaRepository<Laboratory, Long> {

    Optional<Laboratory> findByLabId(String labId);

    boolean existsByLabId(String labId);

}