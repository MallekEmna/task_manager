import { Component, Input, Output, signal, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';
import { LucideIconsModule } from '../../../../lucide-icons.module';
import { Task } from '../../../model/project.model';
import { HighlightStatusDirective } from '../../../../highlight-status';
import { PriorityColorPipe } from '../../../../priority-color-pipe';
import { StatusEmojiPipe } from '../../../../pipes/status-emoji-pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgClass, LucideIconsModule, HighlightStatusDirective, PriorityColorPipe, StatusEmojiPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'

})
export class TaskList {
  @Input() tasks: Task[] = [];
  @Output() statutChange = new EventEmitter<Task>();


  // signal pour afficher / masquer
  isShown = signal(true);

  supprimer(index: number) {
    this.tasks.splice(index, 1);
  }

  leavingFn(event: any) {
    console.log('Animation leave triggered', event);
  }

  changerStatut(task: Task) {
    switch (task.status) {
      case 'En attente': task.status = 'En cours'; break;
      case 'En cours': task.status = 'Terminé'; break;
      case 'Terminé': task.status = 'En attente'; break;
    }
    this.statutChange.emit(task);

  }

}
