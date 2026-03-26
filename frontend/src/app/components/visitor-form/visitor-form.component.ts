import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Visitor } from '../../models/visitor.model';
import { VisitorService } from '../../services/visitor.service';

@Component({
  selector: 'app-visitor-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './visitor-form.component.html',
  styleUrl: './visitor-form.component.css',
})
export class VisitorFormComponent {
  visitor: Visitor = {
    name: '',
    last_name: '',
    date: new Date(),
    reason: '',
  };

  isEdit = false;
  id!: string;

  constructor(
    private svv: VisitorService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    if (this.id) {
      this.isEdit = true;
      this.svv.getById(this.id).subscribe((data) => (this.visitor = data));
    }
  }

  save() {
    if (this.isEdit) {
      this.svv
        .update(this.id, this.visitor)
        .then(() => this.router.navigate(['/visitors']));
    } else {
      this.svv
        .create(this.visitor)
        .then(() => this.router.navigate(['/visitors']));
    }
  }
}
