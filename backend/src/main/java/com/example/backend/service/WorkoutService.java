package com.example.backend.service;

import com.example.backend.model.WorkoutPlan;
import com.example.backend.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;



@Service
public class WorkoutService {

    @Autowired
    private WorkoutRepository workoutRepository;

    public List<WorkoutPlan> getAllWorkoutPlans() {
        return workoutRepository.findAll();
    }

    public WorkoutPlan getWorkoutPlanById(String id) {
        return workoutRepository.findById(id).orElse(null);
    }

    public void createWorkoutPlan(WorkoutPlan workoutPlan) {
        workoutRepository.save(workoutPlan);
    }

    public void updateWorkoutPlan(String id, WorkoutPlan updatedWorkoutPlan) {
    
    Optional<WorkoutPlan> existingWorkoutPlanOptional = workoutRepository.findById(id);

    if (existingWorkoutPlanOptional.isPresent()) {
        WorkoutPlan existingWorkoutPlan = existingWorkoutPlanOptional.get();

        
        existingWorkoutPlan.setTitle(updatedWorkoutPlan.getTitle());
        existingWorkoutPlan.setDescription(updatedWorkoutPlan.getDescription());

        
        List<com.example.backend.model.Exercise> updatedExercises = updatedWorkoutPlan.getExercises();
        for (int i = 0; i < updatedExercises.size(); i++) {
            com.example.backend.model.Exercise updatedExercise = updatedExercises.get(i);
            
            if (i < existingWorkoutPlan.getExercises().size()) {
                com.example.backend.model.Exercise existingExercise = existingWorkoutPlan.getExercises().get(i);
                existingExercise.setName(updatedExercise.getName());
                existingExercise.setSets(updatedExercise.getSets());
                existingExercise.setRepetitions(updatedExercise.getRepetitions());
            } else {
                
                existingWorkoutPlan.getExercises().add(updatedExercise);
            }
            }

        
        workoutRepository.save(existingWorkoutPlan);
        	} else {
        
        throw new RuntimeException("Workout plan with id " + id + " not found");
        }
    }

    

    public void deleteWorkoutPlan(String id) {
        workoutRepository.deleteById(id);
    }

}
