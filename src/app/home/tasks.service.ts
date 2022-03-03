import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../Models/item';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  APIURL = 'https://retoolapi.dev/r2IvLY/tasks';
  TodoTaskURl = 'https://retoolapi.dev/r2IvLY/tasks?status=todo';
  InProgTaskURl = 'https://retoolapi.dev/r2IvLY/tasks?status=inprogress';
  doneTaskURl = 'https://retoolapi.dev/r2IvLY/tasks?status=done';

  constructor(public http: HttpClient) {}

  getAllTasks() {
    return this.http.get(this.APIURL);
  }

  gettodoTasks() {
    return this.http.get(this.TodoTaskURl);
  }

  getInProgressTasks() {
    return this.http.get(this.InProgTaskURl);
  }

  getDoneTasks() {
    return this.http.get(this.doneTaskURl);
  }

  AddNewTask(newTask: Item) {
    this.http.post(this.APIURL, newTask).subscribe();
  }

  DeleteTask(item: Item) {
    this.http.delete(this.APIURL + '/' + item.id).subscribe();
  }

  UpdateTask(item: Item) {
    this.http.put(this.APIURL + '/' + item.id, item).subscribe();
  }
}
