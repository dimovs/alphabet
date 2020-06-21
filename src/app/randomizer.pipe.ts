import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'randomizer'
})
export class RandomizerPipe implements PipeTransform {

  transform(value: any[]): any {
    const arr = value.map((str) => str.split(''));
    return arr[Math.floor(Math.random() * arr.length)];
  }

}
