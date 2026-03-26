package com.optativa.bloc_notas.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "task")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    // Task:taskId
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "taskid")
    private Integer taskId;

    // Task:name
    @Column(name = "name")
    private String name;

    // Task:date
    @Column(name = "date")
    private LocalDate date;

    // Task:cateogryId
    @ManyToOne
    @JoinColumn(name = "categoryid")
    private Category category;
}
