import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AppTask } from '../../task.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-tasks-form',
  templateUrl: './tasks-form.component.html',
  styleUrls: ['./tasks-form.component.css']
})
export class TasksFormComponent implements OnInit {
  @Input() selectedTask: AppTask;
  @Output() taskUpdated: EventEmitter<void> = new EventEmitter();
  @ViewChild('newTaskInput') taskInputRef: ElementRef;
  @ViewChild('updateTaskInput') updateTaskInputRef: ElementRef;

  constructor(private taskService: TasksService) { }

  ngOnInit(): void {
  }

  onAddTask(): void {
    const newTask = new AppTask(this.taskInputRef.nativeElement.value);    
    this.taskService.addTask(newTask);
    this.taskInputRef.nativeElement.value = '';
  }

  onUpdateTask(): void {
    this.taskService.updateTask(this.selectedTask, this.updateTaskInputRef.nativeElement.value);
    this.taskUpdated.emit();
  }

}
