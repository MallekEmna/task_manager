import { NgModule } from '@angular/core';
import { LucideAngularModule, Clock, Rocket, Check, Search, RefreshCw, Moon, Sun, HandHelping } from 'lucide-angular';

const icons = {
  Clock,
  Rocket,
  Check,
  Search,
  RefreshCw,
  Sun,
  Moon,
  HandHelping
};

@NgModule({
  imports: [LucideAngularModule.pick(icons)],
  exports: [LucideAngularModule],
})
export class LucideIconsModule { }
