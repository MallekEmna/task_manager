import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project } from '../../../model/project.model';

@Component({
  selector: 'app-edit-project',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-project.html',
  styleUrls: ['./edit-project.css']
})
export class EditProject {
  @Input() project!: Project;
  @Output() projectUpdated = new EventEmitter<Project>();
  @Output() cancelEdit = new EventEmitter<void>();

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Projet mis à jour :', this.project);
      this.projectUpdated.emit(this.project);
    }
  }
  onCancel() {
    console.log('Édition annulée');
    this.cancelEdit.emit();
  }

}
