package com.example.backend.model;
import org.springframework.data.annotation.Id;


public class Exercise {
    @Id
    private String id;
    private String name;
    private int sets;
    private int repetitions;

   
    public Exercise() {
    }

    
    public Exercise(String name, int sets, int repetitions) {
        this.name = name;
        this.sets = sets;
        this.repetitions = repetitions;
    }

    
    public String getName() {
        return name;
    }
     
     public String getId() {
        return id;
    }

    
    public void setId(String id) {
        this.id = id;
    }
    
    public void setName(String name) {
        this.name = name;
    }

    
    public int getSets() {
        return sets;
    }

    
    public void setSets(int sets) {
        this.sets = sets;
    }

    
    public int getRepetitions() {
        return repetitions;
    }

    
    public void setRepetitions(int repetitions) {
        this.repetitions = repetitions;
    }
}
