import { Component, Input, OnInit } from '@angular/core';
import { APikachuService } from '../servicios/a-pikachu.service';

@Component({
  selector: 'app-tabla-ataques',
  templateUrl: './tabla-ataques.component.html',
  styleUrls: ['./tabla-ataques.component.css']
})
export class TablaAtaquesComponent implements OnInit {

  //Variables
  @Input() movimiento: any;
  @Input() gen: any;
  movimientos: any[8];
  constructor(
    private apiKachu: APikachuService
  ) {
    this.movimientos = new Array(8).fill([])

  }

  ngOnInit(): void {
    this.formateoGuay(this.movimiento)
  }

  formateoGuay(movimiento: any) {
    let aux = movimiento.move.url.split("/")
    this.apiKachu.getMovimiento(parseInt(aux[6])).then(datos => {
      
      let movFormatted: any = this.movSimplificado(datos)
      
      this.movimientos[movFormatted.generation - 1].push(movFormatted);
    }).catch(err => {
      console.log(err)
    })
  }

  movSimplificado(datos: any) {
    let gen = datos.generation.url.split("/");
    return {
      accuracy: datos.accuracy,
      type: datos.type.name,
      name: datos.name,
      power: datos.power,
      pp: datos.pp,
      generation: gen[6]
    };
  }

  /* console.log(this.movimientos) */
}
