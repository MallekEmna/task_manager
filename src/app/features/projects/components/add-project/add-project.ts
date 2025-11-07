import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { Project } from '../../../model/project.model';

@Component({
  selector: 'app-add-project',
  standalone: true,
  imports: [NgClass, FormsModule, CommonModule],
  templateUrl: './add-project.html',
  styleUrls: ['./add-project.css'],
})
export class AddProject {
  @Output() projectAdded = new EventEmitter<Project>();

  project: Project = {
    name: '',
    description: '',
    status: 'En attente',
    tasks: [],
    createdAt: new Date(),
  };

  message: string = '';

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Projet ajouté :', this.project);

      // Émettre une copie de l'objet pour éviter les problèmes de référence
      this.projectAdded.emit({ ...this.project, createdAt: new Date() });

      this.message = `Le projet "${this.project.name}" a été créé avec succès !`;

      // Réinitialiser le formulaire et l'objet projet
      form.resetForm(); // méthode recommandée pour NgForm
      this.project = {
        name: '',
        description: '',
        status: 'En attente',
        tasks: [],
        createdAt: new Date(),
      };
    }
  }

  onReset(form: any) {
    form.reset();
    this.message = '';
  }
}
