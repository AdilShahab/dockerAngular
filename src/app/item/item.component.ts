import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from '../home/tasks.service';
import { Item } from '../Models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() index = 0;
  @Input() ItemData!: Item;
  constructor(private taskService: TasksService) {}

  ngOnInit(): void {}

  DeleteTask() {
    this.taskService.DeleteTask(this.ItemData);
    window.location.reload();
  }
}
