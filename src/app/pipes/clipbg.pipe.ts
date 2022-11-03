import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clipbg'
})
export class ClipbgPipe implements PipeTransform {
  //Vars
  class = "";

  transform(pkmn: any, ...args: unknown[]): any {
    //Si no tiene tipo secundario devuelve una clase u otra
    if (pkmn.types[1] == undefined) {
      return this.justOneType(pkmn);
    } else {
      return this.twoTypes(pkmn);
    }
  }
  //If only ONe trype
  justOneType(pkmn: any) {
    return " linear-gradient(135deg, white 0%, " + this.switchTypes(pkmn.types[0].type.name) + " 100%)";
  }
  //If Two Types
  twoTypes(pkmn: any) {
    return " linear-gradient(135deg, " + this.switchTypes(pkmn.types[0].type.name) + " 0%, " + this.switchTypes(pkmn.types[1].type.name) + " 100%)";
  }
  //Switcherinho
  switchTypes(type: any) {
    switch (type) {
      case "normal":
        return 'peachpuff'
      case "water":
        return 'dodgerBlue'
      case "fire":
        return 'crimson'
      case "grass":
        return 'lime'
      case "flying":
        return 'powderblue'
      case "electric":
        return 'yellow'
      case "bug":
        return 'forestgreen'
      case "poison":
        return 'darkviolet'
      case "fighting":
        return 'indianred'
      case "dark":
        return 'black'
      case "psychic":
        return 'fuchsia'
      case "ghost":
        return 'indigo'
      case "steel":
        return 'grey'
      case "ice":
        return 'lightcyan'
      case "ground":
        return 'burlywood'
      case "rock":
        return 'saddlebrown'
      case "fairy":
        return 'hotpink'
      case "dragon":
        return 'darkslateblue'
      default:
        return 'white'
    }
  }
}
