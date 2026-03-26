import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Visitor } from '../../models/visitor.model';
import { VisitorService } from '../../services/visitor.service';
import { DatePipe } from '@angular/common';
import { Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-visitor-list',
  imports: [RouterLink, DatePipe],
  templateUrl: './visitor-list.component.html',
  styleUrl: './visitor-list.component.css',
})
export class VisitorListComponent {
  visitors: Visitor[] = [];

  constructor(private svv: VisitorService) {}

  ngOnInit() {
    this.svv.getAll().subscribe((data) => (this.visitors = data));
  }

  toDate(date: any): Date {
    if (date instanceof Timestamp) {
      return date.toDate();
    }
    return date;
  }

  delete(id: string) {
    this.svv
      .delete(id)
      .then(() => (this.visitors = this.visitors.filter((v) => v.id !== id)));
  }
}
