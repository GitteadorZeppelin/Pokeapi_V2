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
    console.log(this.pkmn.id)
    if(tipo2 == undefined){
      return tipo1+"-top " + tipo1+"-left " + tipo1+"-right " + tipo1+"-bottom"
    } else {
      return tipo1+"-top " + tipo1+"-left " + tipo2.type.name+"-right " + tipo2.type.name+"-bottom"
    }
  }
}
