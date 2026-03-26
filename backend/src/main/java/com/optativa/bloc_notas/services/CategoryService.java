package com.optativa.bloc_notas.services;

import com.optativa.bloc_notas.dto.CategoryRequestDTO;
import com.optativa.bloc_notas.dto.CategoryResponseDTO;
import com.optativa.bloc_notas.model.Category;
import com.optativa.bloc_notas.repositories.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository repo;

    public List<CategoryResponseDTO> getAll() {
        return repo.findAll().stream()
                .map(this:: toResponse)
                .collect(Collectors.toList());
    }

    public CategoryResponseDTO save(CategoryRequestDTO dto) {
        Category c = new Category(null, dto.getName());
        return toResponse(repo.save(c));
    }

    public CategoryResponseDTO getById (Integer id) {
        return toResponse(repo.findById(id).orElseThrow());
    }

    public CategoryResponseDTO update (CategoryRequestDTO dto, Integer id) {
        Category c = new Category(id, dto.getName());
        return toResponse(repo.save(c));
    }

    public void delete (Integer id) {
        repo.deleteById(id);
    }

    private CategoryResponseDTO toResponse(Category c) {
        return new CategoryResponseDTO(c.getCategoryId(), c.getName());
    }
}
