import { Component} from '@angular/core';
import { dataFake, dataGames } from '../../components/data/dataFake'

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public data = dataFake;
  public bannerAtual = this.data[0];
  public games = dataGames;
  public filteredGames = dataGames;
  public searchTerm: string = '';

  public alterarBanner(id: number): void{
    const novoBanner = this.data.find(item => item.id === id);
    if (novoBanner){
      this.bannerAtual = novoBanner
    }
  }
  public searchGames(term: string): void {
    this.searchTerm = term.toLowerCase();
    if (this.searchTerm.trim() === '') {
      this.filteredGames = this.games;
    } else {
      this.filteredGames = this.games.filter(game => game.title.toLowerCase().includes(this.searchTerm));
    }
  }

  public filtrarJogos(console: string): void {
    if (console === 'all') {
      this.filteredGames = this.games;
    } else {
      this.filteredGames = this.games.filter(game => game.console.includes(console));
    }
  }
}
