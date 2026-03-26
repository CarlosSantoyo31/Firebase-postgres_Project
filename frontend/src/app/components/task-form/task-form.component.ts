import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  task: Task = {
    name: '',
    date: new Date().toISOString().split('T')[0],
    categoryId: 0,
    categoryName: "Selecciona una opción"
  };
  categories: Category[] = [];
  isEdit = false;
  id!: number;

  constructor(
    private svt: TaskService,
    private svc: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.svc.getAll().subscribe((data) => (this.categories = data));

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.isEdit = true;
      this.svt.getById(this.id).subscribe((data) => (this.task = data));
    }
  }

  save() {
    if (this.isEdit) {
      this.svt
        .update(this.id, this.task)
        .subscribe(() => this.router.navigate(['/tasks']));
    } else {
      this.svt
        .create(this.task)
        .subscribe(() => this.router.navigate(['/tasks']));
    }
  }
}
