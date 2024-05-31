import { Component } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { Task } from '../models/task';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [MatFormField, MatCheckbox, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css',
})
export class TaskDetailComponent {
  task: Task = { id: 1, title: 'Learn Angular', isCompleted: false };

  submitForm() {}
}
