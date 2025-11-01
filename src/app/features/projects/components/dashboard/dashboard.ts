import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  totalProjects = 8;
  totalTasks = 42;
  completedTasks = 30;

  get globalProgress(): number {
    return Math.round((this.completedTasks / this.totalTasks) * 100);
  }

}
