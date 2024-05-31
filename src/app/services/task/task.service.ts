import { Injectable } from '@angular/core';
import { Task } from '../../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private storageKey = 'tasks';
  private tasks: Task[] = [];
  private nextId: number;

  constructor() {
    const tasksJson = localStorage.getItem(this.storageKey);
    this.tasks = tasksJson ? JSON.parse(tasksJson) : [];
    this.nextId = this.tasks.length ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
   }

  get(): Task[] {    
    return this.tasks;
  }

  private save(): void {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem(this.storageKey, tasksJson);
  }

  add(task: Task): void {
    const tasks = this.get();
    tasks.push(task);
    this.save();
  }

  delete(taskId: number): void {
    let tasks = this.get();
    tasks = tasks.filter(t => t.id !== taskId);
    this.save();
  }

  update(updatedTask: Task): void {
    const tasks = this.get();
    const index = tasks.findIndex(t => t.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = updatedTask;
      this.save();
    }
  }
}
