import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightStatus]'
})
export class HighlightStatusDirective implements OnInit {

  @Input('appHighlightStatus') status!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.updateBackground();
  }

  private updateBackground(): void {
    let bgColor = '';
    switch (this.status) {
      case 'Terminé':
        bgColor = 'bg-green-100';
        break;
      case 'En cours':
        bgColor = 'bg-blue-100';
        break;
      case 'En attente':
        bgColor = 'bg-yellow-100';
        break;
      default:
        bgColor = 'bg-gray-100';
    }
    this.el.nativeElement.classList.add(bgColor);
  }
}
