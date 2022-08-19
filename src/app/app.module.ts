import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../routing/app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokeCardComponent } from './poke-card/poke-card.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { HttpClientModule } from '@angular/common/http';
import { PokeTipoPipe } from './pipes/poketipo.pipe';
import { MovimientoPipe } from './pipes/movimiento.pipe';
import { TablaAtaquesComponent } from './tabla-ataques/tabla-ataques.component';

@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    PokeCardComponent,
    PokemonComponent,
    PokeTipoPipe,
    MovimientoPipe,
    TablaAtaquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovimientoPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
