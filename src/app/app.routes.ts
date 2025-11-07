import { Routes } from '@angular/router';
import { ProjectList } from './features/projects/components/project-list/project-list';
import { Dashboard } from './features/projects/components/dashboard/dashboard';
import { AddProject } from './features/projects/components/add-project/add-project';

export const routes: Routes = [
    { path: 'projects', component: ProjectList },
    { path: 'add-project', component: AddProject },
    { path: 'dashboard', component: Dashboard },
    { path: '', redirectTo: '/projects', pathMatch: 'full' }
];