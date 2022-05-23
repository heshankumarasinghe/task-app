import { Component } from '@angular/core';
import { AppTask } from './tasks/task.model';
import { TasksService } from './tasks/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TasksService]
})
export class AppComponent {
  selectedTask: AppTask; 

  onEditButtonPressed(task: AppTask): void {
    this.selectedTask = task;
  }

  onTaskUpdated(): void {
    this.selectedTask = undefined;
  }
}
