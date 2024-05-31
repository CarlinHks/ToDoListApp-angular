import { Injectable } from '@angular/core';
import { Task } from '../../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private storageKey = 'tasks';
  private tasks: Task[] = [];
  private nextId: number;

  constructor() {
    const tasksJson = localStorage.getItem(this.storageKey);
    this.tasks = tasksJson ? JSON.parse(tasksJson) : [];
    this.nextId = this.tasks.length
      ? Math.max(...this.tasks.map((t) => t.id)) + 1
      : 1;
  }

  get(): Task[] {
    return this.tasks;
  }

  getItem(id: number): Task {
    let item = this.tasks.find((t) => t.id == id);

    if (!item) {
      return { id: 0, title: '', isCompleted: false };
    }

    return item;
  }


  private save(): void {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem(this.storageKey, tasksJson);
  }

  delete(taskId: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
    this.save();
  }

  add(nweTask: Task): void {
    nweTask.id = this.nextId++;
    this.tasks.push(nweTask);
    this.save();
  }

  update(updatedTask: Task): void {
    const index = this.tasks.findIndex((t) => t.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.save();
    }
  }
}
