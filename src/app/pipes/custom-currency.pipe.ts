import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency',
})
export class CustomCurrencyPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value)) {
      return 'Invalid Value';
    }

    const formattedValue = value.toFixed(3);
    return `${formattedValue} DT`;
  }
}
