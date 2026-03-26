package com.optativa.bloc_notas.controller;

import com.optativa.bloc_notas.dto.TaskRequestDTO;
import com.optativa.bloc_notas.dto.TaskResponseDTO;
import com.optativa.bloc_notas.services.TaskService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tasks")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class TaskController {
    private final TaskService service;

    @GetMapping // -> Get All
    public List<TaskResponseDTO> getAll() {return service.getAll();}

    @PostMapping // -> Create
    public TaskResponseDTO create(@RequestBody TaskRequestDTO t) {return  service.save(t);}

    @GetMapping("/{id}") // Get One by Id
    public TaskResponseDTO getById(@PathVariable Integer id) {return service.getById(id);}

    @PutMapping("/{id}") // Update
    public TaskResponseDTO update(@RequestBody TaskRequestDTO t, @PathVariable Integer id) {return service.update(t, id); }

    @DeleteMapping("/{id}") // Delete
    public void delete(@PathVariable Integer id) {service.delete(id);}

}
