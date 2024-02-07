package com.intellijac.backend_intellijac.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class UserComment {

    @Id
    //@GeneratedValue
    private Long id;

    @Column(name = "user_name")
    private String name;

    @Column(name = "user_comment")
    private String comment;

    public UserComment(){}

    public UserComment(String name, String comment) {
        super();
        this.name = name;
        this.comment = comment;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }


    @Override
    public String toString() {
        return "UserComment{" +
                "name='" + name + '\'' +
                ", comment='" + comment + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserComment that = (UserComment) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
