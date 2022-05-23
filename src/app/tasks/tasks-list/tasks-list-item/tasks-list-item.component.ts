import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppTask } from '../../task.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-tasks-list-item',
  templateUrl: './tasks-list-item.component.html',
  styleUrls: ['./tasks-list-item.component.css']
})
export class TasksListItemComponent implements OnInit {
  @Input() task: AppTask;
  @Output() editButtonPressed: EventEmitter<void> = new EventEmitter();

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  onClickDeleteTask(): void {
    this.tasksService.deleteTask(this.task.taskName);
  }

  onClickEditTask(): void {
    this.editButtonPressed.emit();
  }
}
