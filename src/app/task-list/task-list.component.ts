import { Component } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
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