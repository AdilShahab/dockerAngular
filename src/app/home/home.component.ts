import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Item } from '../Models/item';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('userDialogTemplate')
  DialogContentExampleDialog!: TemplateRef<any>;

  constructor(
    public dialog: MatDialog,
    private taskService: TasksService,
    private router: Router
  ) {}

  newTask = {
    id: 3,
    from: 'Ali',
    itemId: 2,
    details: 'Hello Ali',
    dateTime: '03-03-2022',
    assignedTo: 'Ali rehman',
    status: 'todo',
  };
  ngOnInit(): void {
    this.getTodoList();
    this.getInProgressList();
    this.getDoneList();
  }

  todo: any;
  inProgress: any;
  done: any;

  getTodoList() {
    this.todo = this.taskService.gettodoTasks().subscribe((data) => {
      this.todo = data;
      // console.log(data);
    });
  }

  getInProgressList() {
    this.taskService.getInProgressTasks().subscribe((data) => {
      this.inProgress = data;
      // console.log(data);
    });
  }

  getDoneList() {
    this.taskService.getDoneTasks().subscribe((data) => {
      this.done = data;
      // console.log(data);
    });
  }

  UpdateTask(item: Item, status: string) {
    item.status = status;
    this.taskService.UpdateTask(item);
  }

  AddTaskData = {
    id: 0,
    from: '',
    itemId: 0,
    details: '',
    dateTime: '',
    assignedTo: '',
    status: 'todo',
  };

  refresh() {
    window.location.reload();
  }

  AddTask1(): any {
    this.taskService.AddNewTask(this.AddTaskData);
  }

  drop(event: CdkDragDrop<string[]>, cont: string) {
    // console.log("Current Index: "+ event.currentIndex);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if (cont == 'todo') {
        // Update todo
        this.UpdateTask(
          JSON.parse(JSON.stringify(event.container.data[0])),
          'todo'
        );
      } else if (cont == 'inProg') {
        // Update InProg
        this.UpdateTask(
          JSON.parse(JSON.stringify(event.container.data[0])),
          'inprogress'
        );
      } else if (cont == 'done') {
        // Update done
        this.UpdateTask(
          JSON.parse(JSON.stringify(event.container.data[0])),
          'done'
        );
      }
    }

    // console.log('todo:' + this.todo);
    // console.log('inProgress:' + this.inProgress);
    // console.log('done:' + this.done);
  }

  @ViewChild('AddTask', { static: true })
  secondDialog!: TemplateRef<any>;
  openDialogWithoutRef() {
    this.dialog.open(this.secondDialog);
  }
}
