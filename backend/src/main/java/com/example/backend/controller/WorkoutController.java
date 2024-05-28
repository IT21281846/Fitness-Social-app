package com.example.backend.controller;

import com.example.backend.model.WorkoutPlan;
import com.example.backend.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/workouts")
public class WorkoutController {

    @Autowired
    private WorkoutService workoutService;

    @GetMapping
    public ResponseEntity<List<WorkoutPlan>> getAllWorkoutPlans() {
        List<WorkoutPlan> plans = workoutService.getAllWorkoutPlans();
        return ResponseEntity.ok(plans);
    }

    @GetMapping("/{id}")
public ResponseEntity<WorkoutPlan> getWorkoutPlanById(@PathVariable String id) {
    WorkoutPlan workoutPlan = workoutService.getWorkoutPlanById(id);
    if (workoutPlan != null) {
        return ResponseEntity.ok(workoutPlan);
    } else {
        return ResponseEntity.notFound().build();
    }
}


    @PostMapping
    public ResponseEntity<?> createWorkoutPlan(@RequestBody WorkoutPlan workoutPlan) {
        workoutService.createWorkoutPlan(workoutPlan);
        return ResponseEntity.status(HttpStatus.CREATED).body("Workout plan created successfully.");
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateWorkoutPlan(@PathVariable String id, @RequestBody WorkoutPlan updatedWorkoutPlan) {
        workoutService.updateWorkoutPlan(id, updatedWorkoutPlan);
        return ResponseEntity.ok().body("Workout plan updated successfully.");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteWorkoutPlan(@PathVariable String id) {
        workoutService.deleteWorkoutPlan(id);
        return ResponseEntity.ok().body("Workout plan deleted successfully.");
    }
}
