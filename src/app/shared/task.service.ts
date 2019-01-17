import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  formData: Task;
  updateData:Task;
  taskList: Task[];
  
  readonly rootUrl = "http://localhost:8088/api";
  constructor(private http : HttpClient) {  
    this.formData = {
      TaskId: null,
      TaskDetail: "",
      ParentTask: "",
      Priority: null,
      StartDate: null,
      EndDate: null,
      EndValue: null
    }
  }
  resetForm(form?: NgForm){
    if(form!=null)
      form.resetForm();    
  }
  postTask(formData: Task, form: NgForm){
    return this.http.post(this.rootUrl+ '/Tasks', formData)
    .subscribe(res=>{
      this.resetForm(form);
    });
  }
  putTask(taskId:number,formData: Task,form : NgForm,bEnd: boolean){
    if(bEnd){
    formData.EndValue=1;
    }
    
    return this.http.put(this.rootUrl+'/Tasks/'+taskId,formData).subscribe(res=>{
      this.resetForm(form);
    });
  }

  saveTask(form: NgForm,task: Task){
    task=form.value;
    if(task.TaskId===null){
      
      this.postTask(task,form);
    }
    else{
      
      this.putTask(task.TaskId,task,form,false);
    }
  }

  refreshList():Observable<Task[]>
  {
    return this.http.get<Task[]>(this.rootUrl+'/Tasks');
  }
  getTask(taskId:number){
    return this.http.get<Task>(this.rootUrl+'/Tasks'+taskId).subscribe(data=>this.formData=data);
  }
  // 
}
