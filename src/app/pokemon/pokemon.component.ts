import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APikachuService } from '../servicios/a-pikachu.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  //Variables
  pkmn: any;
  gen: number;
  constructor(
    private route: ActivatedRoute,
    private api: APikachuService
  ) { 
    this.gen = 1
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.api.getPKMN(params['num']).then(datos => {
        this.pkmn = datos; 
      }, err=>{ //Callback de error
        console.log(err)
      }) 
    });
  }

  activo(valor: number){
    this.gen = valor
  }
}
