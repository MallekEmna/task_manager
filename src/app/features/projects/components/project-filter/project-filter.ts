import { Component, Output ,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideIconsModule } from '../../../../lucide-icons.module';

@Component({
  selector: 'app-project-filter',
  imports: [FormsModule ,LucideIconsModule],
  templateUrl: './project-filter.html',
  styleUrl: './project-filter.css'
})
export class ProjectFilter {
  searchTerm = '';

  // Permet d'envoyer la valeur vers le composant parent
  @Output() searchChanged = new EventEmitter<string>();

  onSearchChange() {
    this.searchChanged.emit(this.searchTerm.trim());
  }
}
