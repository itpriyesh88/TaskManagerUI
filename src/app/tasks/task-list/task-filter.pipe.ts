import { PipeTransform, Pipe } from '@angular/core';
import { Task } from '../../shared/task.model';

@Pipe({
    name:'taskFilter'
})

export class TaskFilterPipe implements PipeTransform{
    
    transform(tasks:Task[], searchTask:string, searchParentTask:string, searchPriorityFrom:Number,searchPriorityTo:Number,searchStartDate:Date,searchEndDate:Date):Task[]{
        if(tasks && tasks.length){
            return tasks.filter(task=>{
                if(searchTask && task.TaskDetail.toLowerCase().indexOf(searchTask.toLowerCase())=== -1)
                {
                    return false;
                }
                if(searchParentTask && task.ParentTask.toLowerCase().indexOf(searchParentTask.toLowerCase())=== -1)
                {
                    return false;
                }
                if(searchStartDate && new Date(task.StartDate).getTime() < new Date(searchStartDate).getTime())
                {
                    return false;
                }
                if(searchPriorityFrom && task.Priority<searchPriorityFrom)
                {
                    return false;
                }
                if(searchPriorityTo && task.Priority>searchPriorityTo)
                {
                    return false;
                }
                if(searchEndDate && new Date(task.EndDate).getTime() > new Date(searchEndDate).getTime())
                {
                    return false;
                }
                return true;
            })
        }
        else{
            return tasks;
        }
    }
}