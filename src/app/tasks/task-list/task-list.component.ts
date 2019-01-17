import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../shared/task.service';
import { Task } from '../../shared/task.model';
import { TasksComponent } from '../tasks.component';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { ITask, SerachTask } from '../../shared/Itask';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public searchObj: SerachTask = {
        searchTask: '',
        searchParentTask: '',
        searchPriorityFrom: null,
        searchPriorityTo: null,
        searchStartDate: null,
        searchEndDate: null
  };
  //public searchObj: ITask;
  tasks: Task[];
  today = new Date();
  jstoday='';
  constructor(private service : TaskService) {
    this.jstoday=formatDate(this.today,'dd-MM-yyyy hh:mm:ss a','en-US','+0530');
   }

  ngOnInit() {
    this.service.refreshList().subscribe(data=>this.tasks=data);
    
  }

  populateTask(task: Task){    
    this.service.formData=task;    
  }

  endTask(taskId: number,task:Task){
    this.service.putTask(taskId,task,null,true);
  }

  checkDisabled(task: Task):boolean{
    if(new Date(task.EndDate).getTime() > this.today.getTime()){
      return true;
    }
  }

}
