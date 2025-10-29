import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';  // ✅ Import du JsonPipe

@Component({
  selector: 'app-form-insc',
  standalone: true,
  imports: [FormsModule, JsonPipe,CommonModule], // ✅ Ajout ici
  templateUrl: './form-insc.html',
  styleUrls: ['./form-insc.css']
})
export class FormInsc {
username = '';
email = ''  ;
password = '';
onSubmit(f: NgForm) {
  const { value, valid } = f;
  this.username = value.login;
  this.email = value.email;
  this.password = value.password;

  if (valid) {
    alert('Formulaire envoyé !');
  } else {
    alert('Formulaire invalide !');
  }
}
}
