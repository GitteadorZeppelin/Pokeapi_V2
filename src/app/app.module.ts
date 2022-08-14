import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../routing/app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokeCardComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
