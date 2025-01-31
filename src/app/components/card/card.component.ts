import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
   @Input() games: { id: number; image: string; title: string; console: string }[] = [];
   button: string[] = ['PS4', 'PS5'];
   @Output() filtroSelecionado = new EventEmitter<string>();

   getCardStyle(gameConsole: string) {
    if (gameConsole === 'PS4') {
      return { background: 'black', color: 'white' };
    } else if (gameConsole ==='PS5')
      return { background: 'white', color: 'black'}
    else {
      return {};
    }
  }

  public filtrar(console: string) {
    this.filtroSelecionado.emit(console);
  }
}
