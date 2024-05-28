package com.example.backend.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document; 
@Document(collection = "workoutPlan") 

public class WorkoutPlan {
    
    @Id
    private String id;
    private String title;
    private String description;
    private List<Exercise> exercises;

    
    public WorkoutPlan() {
    }

    
    public WorkoutPlan(String title, String description  , List<Exercise> exercises) {
        this.title = title;
        this.description = description;
        this.exercises = exercises;
    }

     
     public String getId() {
        return id;
    }

    
    public void setId(String id) {
        this.id = id;
    }


    
    public String getTitle() {
        return title;
    }

    
    public void setTitle(String title) {
        this.title = title;
    }

    
    public String getDescription() {
        return description;
    }

    
    public void setDescription(String description) {
        this.description = description;
    }
 
    
    public List<Exercise> getExercises() {
        return exercises;
    }

    
    public void setExercises(List<Exercise> exercises) {
        this.exercises = exercises;
    }

}
