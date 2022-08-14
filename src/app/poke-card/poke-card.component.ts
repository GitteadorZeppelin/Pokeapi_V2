import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  //Variables
  @Input() pkmn: any;
  constructor() { }

  ngOnInit(): void {
  }

  creoClase(tipo1 :any, tipo2:any){
    if(tipo2 == undefined){
      return tipo1+"-primario " + tipo1+"-secundario"
    } else {
      return tipo1+"-primario " + tipo2.type.name+"-secundario"
    }
  }
}
