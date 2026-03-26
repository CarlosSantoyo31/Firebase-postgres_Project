import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css',
})
export class CategoryFormComponent implements OnInit {
  category: Category = { name: '' };
  isEdit = false;
  id!: number;

  constructor(
    private svc: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEdit = true;
      this.svc.getById(this.id).subscribe((data) => (this.category = data));
    }
  }

  save() {
    if (this.isEdit) {
      this.svc
        .update(this.id, this.category)
        .subscribe(() => this.router.navigate(['/categories']));
    } else {
      this.svc
        .create(this.category)
        .subscribe(() => this.router.navigate(['/categories']));
    }
  }
}
