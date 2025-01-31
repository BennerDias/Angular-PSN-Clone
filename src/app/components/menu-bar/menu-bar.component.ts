import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  standalone: false,

  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {
  public searchTerm: string = '';
  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();

  searchFunc(){
    this.searchEvent.emit(this.searchTerm);
  }
}
