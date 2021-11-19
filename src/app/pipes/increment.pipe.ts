import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'increment'
})
export class IncrementPipe implements PipeTransform {

  transform(value: number[],inc:number, ...args: unknown[]): number[] {
    return value.map(item => item+inc)
  }

}
