import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-banners',
  standalone: false,

  templateUrl: './card-banners.component.html',
  styleUrl: './card-banners.component.css'
})
export class CardBannersComponent {
  @Input() cards!: { id: number; image: string; title: string; text: string }[];
  @Output() bannerSelecionado = new EventEmitter<number>();

  selecionarBanner(id: number): void {
    this.bannerSelecionado.emit(id); 
  }
}
