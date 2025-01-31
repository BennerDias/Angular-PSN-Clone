import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banners',
  standalone: false,
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.css'
})
export class BannersComponent {
  @Input() banner!: { id: number; image: string; title: string; text: string };
}
