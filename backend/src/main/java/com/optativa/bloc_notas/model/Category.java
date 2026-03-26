package com.optativa.bloc_notas.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "category")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Category {
    //Category:categoryId
    @Id  // -> Indica que es una primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) // -> Indica que es auto incrementable.
    @Column(name = "categoryid")
    private Integer categoryId;

    // Category:name
    @Column(name = "name")
    private String name;
}
