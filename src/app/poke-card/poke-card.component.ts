import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  //Variables
  @Input() pkmn: any;
  @Input() veoNombre: any;
  constructor() { }

  ngOnInit(): void {
  }
}
