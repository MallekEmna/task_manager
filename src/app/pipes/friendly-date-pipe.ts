import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendlyDate'
})
export class FriendlyDatePipe implements PipeTransform {

  transform(value: Date | string): string {
    const date = new Date(value);
    const today = new Date();

    // Calcul de la différence en millisecondes
    const diffTime = today.getTime() - date.getTime();

    // Conversion en jours
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30);
    const diffYears = Math.floor(diffDays / 365);

    if (diffDays < 0) return 'Dans le futur'; // Cas de sécurité
    if (diffDays === 0) return 'Aujourd’hui';
    if (diffDays === 1) return 'Hier';
    if (diffDays < 30) return `Il y a ${diffDays} jour${diffDays > 1 ? 's' : ''}`;
    if (diffDays < 365) return `Il y a ${diffMonths} mois`;
    return `Il y a ${diffYears} an${diffYears > 1 ? 's' : ''}`;
  }

}
