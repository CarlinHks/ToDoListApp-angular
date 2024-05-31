import { Component } from '@angular/core';
import { Task } from '../models/task';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule],
})
export class TaskListComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  tasks: Task[] = [
    { id: 1, title: 'Learn Angular', isCompleted: false },
    { id: 2, title: 'Build a project', isCompleted: false },
    { id: 3, title: 'Write documentation', isCompleted: true }
  ];
  nextId = 4;

  addTask(title: string) {
    if (title.trim()) {
      const newTask: Task = { id: this.nextId++, title, isCompleted: false };
      this.tasks.push(newTask);
    }
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
  }

  editTask(task: Task, newTitle: string) {
    if (newTitle.trim()) {
      task.title = newTitle;
    }
  }

  toggleTaskCompletion(task: Task) {
    task.isCompleted = !task.isCompleted;
  }
}