import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from 'src/app/pokedex/pokedex.component';
import { PokemonComponent } from 'src/app/pokemon/pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent
  },{
    path: '/pokedex',
    component: PokedexComponent
  },{
    path: '/pokemon/:num',
    component: PokemonComponent
  },{
    path: '**',
    component: PokedexComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
