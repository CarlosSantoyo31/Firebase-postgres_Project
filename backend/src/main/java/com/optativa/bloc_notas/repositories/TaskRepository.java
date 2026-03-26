package com.optativa.bloc_notas.repositories;

import com.optativa.bloc_notas.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository <Task, Integer> {
}
