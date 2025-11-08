import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectList } from './features/projects/components/project-list/project-list';
import { Navbar } from './features/projects/components/navbar/navbar';
import { LucideIconsModule } from './lucide-icons.module';
@Component({
  selector: 'app-root',
  imports: [LucideIconsModule, Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
