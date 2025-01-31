import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BannersComponent } from './components/banners/banners.component';
import { CardBannersComponent } from './components/card-banners/card-banners.component';
import { SonybarComponent } from './components/sonybar/sonybar.component';
import { SaibaMaisButtonComponent } from './components/saiba-mais-button/saiba-mais-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    BannersComponent,
    CardBannersComponent,
    SonybarComponent,
    SaibaMaisButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
