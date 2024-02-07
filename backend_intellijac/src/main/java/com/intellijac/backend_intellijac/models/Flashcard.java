package com.intellijac.backend_intellijac.models;

import jakarta.persistence.*;

@Entity
public class Flashcard {

    @Id
    //@GeneratedValue (strategy = GenerationType.IDENTITY)
    //@GeneratedValue
    private Long id;

    // TODO: add validation
    private String name;
    private String description;

    public Flashcard(){}

    public Flashcard(String name, String description) {
        super();
        this.name = name;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}