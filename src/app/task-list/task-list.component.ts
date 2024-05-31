import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { TaskService } from '../services/task/task.service';

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
export class TaskListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'isCompleted', 'edit'];
  tasks: Task[] = []
  
  constructor(private _router: Router, private _taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this._taskService.get();
  }

  public goToDetail(id: number) {
    this._router.navigate(['/task', id]);
  }
}
