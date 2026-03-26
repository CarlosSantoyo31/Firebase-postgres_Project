import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list',
  imports: [RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private svt: TaskService) {}

  ngOnInit () {
    this.svt.getAll().subscribe(data => this.tasks = data); 
  }

  delete (id: number) {
    this.svt.delete(id).subscribe(
      () => this.tasks = this.tasks.filter(t => t.taskId !== id)
    )
  }
}
