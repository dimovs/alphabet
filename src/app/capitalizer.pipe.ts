import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizer'
})
export class CapitalizerPipe implements PipeTransform {

  transform(value: string): string {
    const [first, ...rest] = value;
    return first.toUpperCase() + rest.join('');
  }

}
