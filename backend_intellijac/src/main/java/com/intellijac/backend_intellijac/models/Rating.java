package com.intellijac.backend_intellijac.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Rating {

    @Id
    //@GeneratedValue
    private int id;

    @Column(name = "user_rating")
    private int ratingInt;

    public Rating(int ratingInt) {
        this.ratingInt = ratingInt;
    }

    public Rating() {

    }

    //Getters and setters

    public int getId() {
        return id;
    }

    public int getRating() {
        return ratingInt;
    }

    public void setRating(int ratingInt) {
        this.ratingInt = ratingInt;
    }

    //Hashcode and toEquals and toString


    @Override
    public String toString() {
        return "Ratings{" +
                "rating=" + ratingInt +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Rating rating = (Rating) o;
        return id == rating.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
