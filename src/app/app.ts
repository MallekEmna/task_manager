import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProjectList } from './features/projects/components/project-list/project-list';
import { LucideAngularModule } from 'lucide-angular';
import { Navbar } from './features/projects/components/navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [ProjectList, LucideAngularModule, Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
