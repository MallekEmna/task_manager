import { NgModule } from '@angular/core';
import { LucideAngularModule, Clock, Rocket, Check, Search } from 'lucide-angular';

const icons = {
  Clock,
  Rocket,
  Check,
  Search, 
};

@NgModule({
  imports: [LucideAngularModule.pick(icons)],
  exports: [LucideAngularModule],
})
export class LucideIconsModule {}
