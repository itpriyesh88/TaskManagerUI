import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../shared/task.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../shared/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})


export class TaskComponent implements OnInit {
  constructor(public service : TaskService) { }
  
  
  ngOnInit() {
   
  }
  
  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();    
  }
  onSubmit(form: NgForm){
    this.insertRecord(form);  
  }
  insertRecord(form: NgForm){
    
    
    this.service.saveTask(form,form.value);
  }
  
  

}
