import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movimiento'
})
export class MovimientoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
