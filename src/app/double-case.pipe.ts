import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleCase'
})
export class DoubleCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase() + value.toLowerCase();
  }

}
