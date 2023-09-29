import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, wordsCount: number = 20): string {
    if (typeof value !== 'string') {
      return value;
    }

    const words = value.split(' ');

    if (words.length <= wordsCount) {
      return value;
    }

    const truncatedText = words.slice(0, wordsCount).join(' ');

    return truncatedText + '...';
  }
}
