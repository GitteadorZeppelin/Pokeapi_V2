import { Component, OnInit } from '@angular/core';
import { APikachuService } from '../servicios/a-pikachu.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  //Variables
  listaPkmn: any;
  page: any;
  numPkmnPag: any;
  //Declaración de servicios en el constructor
  constructor(
    private apiKachu: APikachuService
  ) {
    //Inicialización de varianles
    this.listaPkmn = []
    this.page = 1;
    this.numPkmnPag = 9;
  }
  //OnInit de obtener Pokemon 
  ngOnInit(): void {
    this.getPkmn(this.page);
  }
  //Obtenemos pokemon según la página
  async getPkmn(page: any) {
    //Inicalizamos el contador a 1
    let contador = 1;
    //For con algoritmo
    for (let x = ((page-1)*this.numPkmnPag)+1; x <= page*this.numPkmnPag; x++) {
      //Llamada a la api asincorna
      await this.apiKachu.getPKMN(x).then(datos => {
        this.listaPkmn[contador-1] = datos;
        //Incremento
        contador++;
      }, err=>{ //Callback de error
        console.log(err)
      }) 
    }    
  }
  //Metodo que avanza las páginas
  adelante(){
    this.page++;
    this.getPkmn(this.page);
  }
  //Método que retrocede las páginas
  atras(){
    this.page--;
    this.getPkmn(this.page);
  }
}
