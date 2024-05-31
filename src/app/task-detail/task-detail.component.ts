import { Component, OnInit } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { Task } from '../models/task';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../services/task/task.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [
    MatFormField,
    MatCheckbox,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css',
})
export class TaskDetailComponent implements OnInit {
  task: Task = { id: 0, title: '', isCompleted: false };

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _taskService: TaskService
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params) => {
      let id: number = params['id'];
      this.task = this._taskService.getItem(id);
    });
  }

  submitForm() {
    if (this.task.id === 0) this._taskService.add(this.task);
    else this._taskService.update(this.task);

    this._router.navigate(['/tasks']);
  }

  cancel() {
    this._router.navigate(['/tasks']);
  }
}
