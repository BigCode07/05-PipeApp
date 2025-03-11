import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroCreatorPipe',
})
export class HeroCreatorPipe implements PipeTransform {
  transform(value: number): any {
    return value ? 'Marvel' : 'DC';
  }
}
