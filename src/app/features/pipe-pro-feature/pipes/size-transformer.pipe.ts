import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sizeTransformer',
  standalone: true,
})
export class SizeTransformerPipe implements PipeTransform {
  transform(value: number, type: string = 'mb'): string {
    return (value / (1024 * 1024)).toFixed(2) + type;
  }
}
