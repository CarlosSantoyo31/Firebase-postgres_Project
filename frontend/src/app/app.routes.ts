import { Routes } from '@angular/router';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { VisitorListComponent } from './components/visitor-list/visitor-list.component';
import { VisitorFormComponent } from './components/visitor-form/visitor-form.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'categories', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'categories', component: CategoryListComponent, canActivate: [authGuard] },
    { path: 'categories/new', component: CategoryFormComponent, canActivate: [authGuard] },
    { path: 'categories/edit/:id', component: CategoryFormComponent, canActivate: [authGuard] },
    { path: 'tasks', component: TaskListComponent, canActivate: [authGuard] },
    { path: 'tasks/new', component: TaskFormComponent, canActivate: [authGuard] },
    { path: 'tasks/edit/:id', component: TaskFormComponent, canActivate: [authGuard] },
    { path: 'visitors', component: VisitorListComponent, canActivate: [authGuard] },
    { path: 'visitors/new', component: VisitorFormComponent, canActivate: [authGuard] },
    { path: 'visitors/edit/:id', component: VisitorFormComponent, canActivate: [authGuard] },
];