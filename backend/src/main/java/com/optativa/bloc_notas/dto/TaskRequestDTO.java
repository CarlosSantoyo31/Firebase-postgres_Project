package com.optativa.bloc_notas.dto;

import lombok.*;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskRequestDTO {
    private String name;
    private LocalDate date;
    private Integer categoryId;
}
