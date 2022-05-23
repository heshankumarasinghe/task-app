import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppTask } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
})
export class TasksListComponent implements OnInit {
  tasks: AppTask[];

  @Output() editButtonPressed: EventEmitter<AppTask> = new EventEmitter();

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.tasks = this.tasksService.getAllTasks();
    this.tasksService.tasksChanged.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  onEditButtonPressed(task: AppTask): void {
    this.editButtonPressed.emit(task);
  }

}
