package com.example.backend.repository;

import com.example.backend.model.WorkoutPlan;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface WorkoutRepository extends MongoRepository<WorkoutPlan, String> {
}
