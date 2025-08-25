package com.example.demo;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name = "subject")
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subjectName;

    @ManyToMany(mappedBy = "subjects")
    private List<Professor> professors;

    public Long getId() {
        return id;
    }
    public void setId(Long id) { this.id = id; }

    public String getSubjectName() { return subjectName; }
    public void setSubjectName(String subjectName) { this.subjectName = subjectName; }

    public List<Professor> getProfessors() { return professors; }
    public void setProfessors(List<Professor> professors) { this.professors = professors; }
}
