package com.example.demo;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "university")
public class University {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToMany(mappedBy = "university", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Professor> professors;

    public Long getId() {
        return id;
    }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public List<Professor> getProfessors() { return professors; }
    public void setProfessors(List<Professor> professors) { this.professors = professors; }
}
