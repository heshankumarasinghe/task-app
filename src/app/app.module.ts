import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksFormComponent } from './tasks/tasks-form/tasks-form/tasks-form.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import { TasksListItemComponent } from './tasks/tasks-list/tasks-list-item/tasks-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksFormComponent,
    TasksListComponent,
    TasksListItemComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
