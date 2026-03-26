package com.optativa.bloc_notas.controller;

import com.optativa.bloc_notas.dto.CategoryRequestDTO;
import com.optativa.bloc_notas.dto.CategoryResponseDTO;
import com.optativa.bloc_notas.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService service;

    @GetMapping // -> Get All
    public List<CategoryResponseDTO> getAll() {return service.getAll();}

    @PostMapping // -> Create
    public CategoryResponseDTO create(@RequestBody CategoryRequestDTO c) {return  service.save(c);}

    @GetMapping("/{id}") // Get One by Id
    public CategoryResponseDTO getById(@PathVariable Integer id) {return service.getById(id);}

    @PutMapping("/{id}")
    public CategoryResponseDTO update(@RequestBody CategoryRequestDTO c, @PathVariable Integer id) {return service.update(c, id); }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id) {service.delete(id);}
}
