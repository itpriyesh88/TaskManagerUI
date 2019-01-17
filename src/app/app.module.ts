import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { MenuComponent } from './menu.component';
import { CONST_ROUTING } from './app.routing';
import { TaskService } from './shared/task.service';
import { TaskFilterPipe } from './tasks/task-list/task-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    TaskListComponent,
    MenuComponent,
    TaskFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CONST_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
