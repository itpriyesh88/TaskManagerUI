import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from "./tasks/task/task.component"
import { TaskListComponent } from "./tasks/task-list/task-list.component";
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/tasks/task', pathMatch: 'full' },
    { path: 'tasks/task/:id', component: TaskComponent },
    { path: 'tasks/task-list', component: TaskListComponent },
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);