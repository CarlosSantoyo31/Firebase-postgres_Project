package com.optativa.bloc_notas.services;

import com.optativa.bloc_notas.dto.TaskRequestDTO;
import com.optativa.bloc_notas.dto.TaskResponseDTO;
import com.optativa.bloc_notas.model.Category;
import com.optativa.bloc_notas.model.Task;
import com.optativa.bloc_notas.repositories.CategoryRepository;
import com.optativa.bloc_notas.repositories.TaskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepository repo;
    private final CategoryRepository categoryRepo;

    public List<TaskResponseDTO> getAll() {
        return repo.findAll().stream()
                .map(this::toResponse)
                .collect(Collectors.toList());
    }

    public TaskResponseDTO save(TaskRequestDTO dto) {
        Category c = categoryRepo.findById(dto.getCategoryId()).orElseThrow();
        Task t = new Task(null, dto.getName(), dto.getDate(), c);

        return toResponse(repo.save(t));
    }

    public TaskResponseDTO getById(Integer id) {
        return toResponse(repo.findById(id).orElseThrow());
    }

    public TaskResponseDTO update(TaskRequestDTO dto, Integer id) {
        Category c = categoryRepo.findById(dto.getCategoryId()).orElseThrow();
        Task t = new Task(id, dto.getName(), dto.getDate(), c);

        return toResponse(repo.save(t));
    }

    public void delete(Integer id) {
        repo.deleteById(id);
    }

    private TaskResponseDTO toResponse(Task t) {
        return new TaskResponseDTO(t.getTaskId(), t.getName(), t.getDate(), t.getCategory().getName());
    }
}