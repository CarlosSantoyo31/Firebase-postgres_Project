import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
    selector: 'app-category-list',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './category-list.component.html',
    styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
    categories: Category[] = [];

    constructor(private svc: CategoryService) {}

    ngOnInit() {
        this.svc.getAll().subscribe(data => this.categories = data);
    }

    delete(id: number) {
        this.svc.delete(id).subscribe(() =>
            this.categories = this.categories.filter(c => c.categoryId !== id)
        );
    }
}