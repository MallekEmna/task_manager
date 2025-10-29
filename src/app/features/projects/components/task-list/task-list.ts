import { Component, Input, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { LucideIconsModule } from '../../../../lucide-icons.module';
import { Task } from '../../../model/project.model';
import { HighlightStatusDirective } from '../../../../highlight-status';
import { PriorityColorPipe } from '../../../../priority-color-pipe';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgClass, LucideIconsModule, HighlightStatusDirective, PriorityColorPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'

})
export class TaskList {
  @Input() tasks: Task[] = [];

  // signal pour afficher / masquer
  isShown = signal(true);

  supprimer(index: number) {
    this.tasks.splice(index, 1);
  }

  leavingFn(event: any) {
    console.log('Animation leave triggered', event);
  }
}
