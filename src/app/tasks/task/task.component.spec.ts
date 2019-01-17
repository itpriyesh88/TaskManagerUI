import { TestBed, async } from '@angular/core/testing';
import { TaskComponent } from './task.component';
import { NgForm } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TaskListComponent } from 'src/app/tasks/task-list/task-list.component';
import { TaskFilterPipe } from 'src/app/tasks/task-list/task-filter.pipe';

describe('TaskComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TaskComponent, TaskListComponent, TaskFilterPipe
            ], imports: [

                FormsModule, HttpClientModule, AppRoutingModule

            ]
        }).compileComponents();
    }));
    it('should create the app', () => {
        const fixture = TestBed.createComponent(TaskComponent);
        const task = fixture.debugElement.componentInstance;
        expect(task).toBeTruthy();
    });
    it('should render label text from label', () => {
        const fixture = TestBed.createComponent(TaskComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('label').textContent).toContain('Task:');
      });
      it('should render Text of Save Task button', () => {
        const fixture = TestBed.createComponent(TaskComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('button').textContent).toContain('Save Task');
      });
});



