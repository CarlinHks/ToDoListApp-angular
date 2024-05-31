import { Component } from '@angular/core';
import { Task } from '../models/task';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressBarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class TaskListComponent {
  constructor(private _router: Router) { }

  displayedColumns: string[] = ['id', 'title', 'isCompleted', 'edit'];
  tasks: Task[] = [
    { id: 1, title: 'Learn Angular', isCompleted: false },
    { id: 2, title: 'Build a project', isCompleted: false },
    { id: 3, title: 'Write documentation', isCompleted: true },
  ];

  public goToDetail(id: number) {
    console.log('Navigating to task detail');
    this._router.navigate(['/task', id]);
  }
}
