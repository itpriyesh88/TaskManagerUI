import { TestBed, async } from '@angular/core/testing';
import { TaskListComponent } from './task-list.component';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TaskComponent } from 'src/app/tasks/task/task.component';
import { TaskFilterPipe } from 'src/app/tasks/task-list/task-filter.pipe';
import {Task} from 'src/app/shared/task.model';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';

describe('TaskListComponent', () => {
    let comp: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;
  let de: DebugElement;
  let element: HTMLElement;
  let mockTask: Task[];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            TaskComponent, TaskListComponent, TaskFilterPipe
        ], imports: [

            FormsModule, HttpClientModule, AppRoutingModule

        ],
    }).compileComponents();
  }));
  beforeEach(()=> { 
    
    fixture = TestBed.createComponent(TaskListComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.table'));
    element  = de.nativeElement;
  });

  it('Should create the TaskListComponent app', () => {
    expect(comp).toBeTruthy();
});
it('should have a table to display the pastes', () => {

    expect(element.innerHTML).toContain("thead");
    expect(element.innerHTML).toContain("tbody");
  })    
});