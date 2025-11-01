import { Component, Input } from '@angular/core';
import { TaskList } from '../task-list/task-list';
import { Project, Task } from '../../../model/project.model';
import { DecimalPipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  imports: [TaskList, NgClass, DecimalPipe],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {
  @Input() project!: Project;

  getProgressPercentage(): number {
    if (!this.project.tasks || this.project.tasks.length === 0) {
      return 0;
    }

    const completedTasks = this.project.tasks.filter(task => task.status === 'Terminé');
    const totalTasks = this.project.tasks.length;
    return Math.round((completedTasks.length / totalTasks) * 100);

  }

  onStatutChange(task: Task) {
    console.log('Tâche modifiée', task);
    this.updateProgress();
  }
  updateProgress() {
    // Mettre à jour la barre de progression
    const progress = this.getProgressPercentage();
    console.log(`Progression du projet mise à jour : ${progress}%`);
  }

}