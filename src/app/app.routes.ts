import { Routes } from '@angular/router';
import { ProjectList } from './features/projects/components/project-list/project-list';
import { Dashboard } from './features/projects/components/dashboard/dashboard';

export const routes: Routes = [
    { path: 'projects', component: ProjectList },
    { path: 'dashboard', component: Dashboard },
    { path: '', redirectTo: '/projects', pathMatch: 'full' }
];