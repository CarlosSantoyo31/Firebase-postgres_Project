package com.optativa.bloc_notas.dto;

import lombok.*;
import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TaskResponseDTO {
    private Integer taskId;
    private String name;
    private LocalDate date;
    private String categoryName;
}