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

  constructor(
    private apiKachu: APikachuService
  ) {
    this.listaPkmn = []
  }

  ngOnInit(): void {
    this.page = 1;
    this.getPkmn(this.page);
  }

  async getPkmn(page: any) {
    this.listaPkmn = [];
    let contador = 1;
    console.log(page)
    for (let x = ((page-1)*12)+1; x <= (page*12); x++) {
      await this.apiKachu.getPKMN(x).then(datos => {
        this.listaPkmn[contador-1] = datos
        contador++
      }) 
    }    
  }

  adelante(){
    this.page++;
    this.getPkmn(this.page);
  }
  atras(){
    this.page--;
    this.getPkmn(this.page);
  }
}
