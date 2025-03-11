import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroTextColor',
})
export class HeroTextColorPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }
}
