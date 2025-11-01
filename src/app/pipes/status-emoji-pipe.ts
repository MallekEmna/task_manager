import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusEmoji'
})
export class StatusEmojiPipe implements PipeTransform {
  transform(status: string): string {
    switch (status) {
      case 'En attente':
        return 'clock';
      case 'En cours':
        return 'rocket';
      case 'Terminé':
        return 'check';
      default:
        return 'help-circle';
    }
  }

}
