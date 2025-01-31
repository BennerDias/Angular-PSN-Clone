import { Component } from '@angular/core';

@Component({
  selector: 'app-saiba-mais-button',
  standalone: false,

  templateUrl: './saiba-mais-button.component.html',
  styleUrl: './saiba-mais-button.component.css'
})
export class SaibaMaisButtonComponent {
  button: string[] = ['Saiba mais', 'Comprar agora', 'Confira a lista completa', 'Ver agora']
}
