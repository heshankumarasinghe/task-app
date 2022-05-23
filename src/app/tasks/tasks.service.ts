import { EventEmitter, Injectable } from "@angular/core";
import { AppTask } from "./task.model";

@Injectable()
export class TasksService {
    tasksChanged = new EventEmitter<AppTask[]>();

    private tasks: AppTask[] = [
        new AppTask('Learn Angular'),
        new AppTask('Give a Presentation'),
    ];

    getAllTasks(): AppTask[] {
        return this.tasks.slice();
    }

    addTask(task: AppTask) {        
        this.tasks.push(task);
        this.tasksChanged.emit(this.tasks.slice());
    }

    deleteTask(taskName: string) {
        const removingTaskIndex: number = this.tasks.findIndex((task) => task.taskName === taskName);
        this.tasks.splice(removingTaskIndex, 1);
        this.tasksChanged.emit(this.tasks.slice());
    }

    updateTask(task: AppTask, newTaskName: string): void {
        const removingTaskIndex: number = this.tasks.findIndex((taskEl) => taskEl.taskName === task.taskName);
        this.tasks[removingTaskIndex].taskName = newTaskName;
        this.tasksChanged.emit(this.tasks.slice());
    }
}