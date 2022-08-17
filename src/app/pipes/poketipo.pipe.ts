import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poketipo'
})
export class PokeTipoPipe implements PipeTransform {
  //Pipe para optimizar
  transform(pkmn: any, ...args: unknown[]): any {
    
    if(pkmn.types[1] == undefined){
      return pkmn.types[0].type.name+"-primario " + pkmn.types[0].type.name+"-secundario"
    } else {
      return pkmn.types[0].type.name+"-primario " + pkmn.types[1].type.name+"-secundario"
    }
  }

}
