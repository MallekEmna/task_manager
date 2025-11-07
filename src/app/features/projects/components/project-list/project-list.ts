import { Component } from '@angular/core';
import { TaskList } from '../task-list/task-list';
import { CommonModule, NgClass } from '@angular/common';
import { Project } from '../../../model/project.model';
import { FormsModule } from '@angular/forms';
import { ProjectFilter } from '../project-filter/project-filter';
import { ProjectDetail } from '../project-detail/project-detail';
import { StatusBadge } from '../../../stylecomponents/status-badge/status-badge';
import { FriendlyDatePipe } from '../../../../pipes/friendly-date-pipe';
import { AddProject } from '../add-project/add-project';
import { EditProject } from '../edit-project/edit-project';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    TaskList,
    CommonModule,
    FormsModule,
    ProjectFilter,
    ProjectDetail,
    StatusBadge,
    FriendlyDatePipe,
    AddProject,
    EditProject
  ],
  templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectList {
  searchTerm = '';
  selectedProject: Project | null = null;
  editingProject: Project | null = null;
  showAddModal = false; //  pour afficher/masquer la modale

  projects: Project[] = [
    {
      name: 'Projet PFE',
      description: 'Projet de fin d’études sur la BI et l’analyse des données de pêche',
      status: 'En cours',
      tasks: [
        { title: 'Chercher un sujet de PFE', priority: 'Haute', status: 'En cours' },
        { title: 'Contacter un encadrant', priority: 'Moyenne', status: 'En cours' },
        { title: 'Rédiger le rapport technique', priority: 'Haute', status: 'En attente' },
        { title: 'Préparer la soutenance', priority: 'Haute', status: 'En attente' }
      ],
      createdAt: new Date('2023-01-15')
    },
    {
      name: 'Développement Angular',
      description: 'Mini-projet Angular standalone pour la gestion de tâches',
      status: 'En cours',
      tasks: [
        { title: 'Créer les composants (ProjectList, TaskList)', priority: 'Haute', status: 'Terminé' },
        { title: 'Configurer TailwindCSS', priority: 'Moyenne', status: 'En cours' },
        { title: 'Améliorer le design façon Jira', priority: 'Basse', status: 'En attente' },
        { title: 'Tester les interactions entre composants', priority: 'Haute', status: 'En attente' }
      ],
      createdAt: new Date('2025-10-30')
    },
    {
      name: 'Vie personnelle',
      description: 'Organisation des tâches quotidiennes et personnelles',
      status: 'En cours',
      tasks: [
        { title: 'Préparer un bon CV', priority: 'Haute', status: 'Terminé' },
        { title: 'Chercher un stage ou emploi', priority: 'Haute', status: 'En cours' },
        { title: 'Faire des courses', priority: 'Moyenne', status: 'En attente' },
        { title: 'Préparer un gâteau pour l’anniversaire', priority: 'Basse', status: 'Terminé' }
      ],
      createdAt: new Date('2025-10-28')
    }
  ];

  onSearch(term: string) {
    this.searchTerm = term.toLowerCase();
  }

  get filteredProjects() {
    if (!this.searchTerm) return this.projects;

    return this.projects.filter(project => {
      const inProject =
        project.name.toLowerCase().includes(this.searchTerm) ||
        project.description.toLowerCase().includes(this.searchTerm) ||
        project.status.toLowerCase().includes(this.searchTerm);

      const inTasks = project.tasks.some(
        task =>
          task.title.toLowerCase().includes(this.searchTerm) ||
          task.priority.toLowerCase().includes(this.searchTerm) ||
          task.status.toLowerCase().includes(this.searchTerm)
      );

      return inProject || inTasks;
    });
  }

  toggleProjectDetails(project: Project) {
    this.selectedProject = this.selectedProject === project ? null : project;
  }

  //  Quand un projet est ajouté depuis le modal
  onProjectAdded(newProject: Project) {
    this.projects.unshift(newProject); // ajoute en haut de la liste
    this.showAddModal = false; // ferme la fenêtre
    this.searchTerm = ''; // réinitialise le filtre
  }
  onProjectUpdated(updatedProject: Project) {
    // Remplacer l'ancien projet par le projet modifié
    const index = this.projects.findIndex(p => p.createdAt.getTime() === updatedProject.createdAt.getTime());
    if (index > -1) {
      this.projects[index] = { ...updatedProject };
    }

    // Fermer le formulaire
    this.editingProject = null;
  }

}
