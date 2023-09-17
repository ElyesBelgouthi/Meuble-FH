import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, ...args: any[]): string {
    if (typeof value !== 'string') {
      return value;
    }

    const words = value.split(' ');

    if (words.length <= 20) {
      return value;
    }

    const truncatedText = words.slice(0, 20).join(' ');

    return truncatedText + '...';
  }
}
