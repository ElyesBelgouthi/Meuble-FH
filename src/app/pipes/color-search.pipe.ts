import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorSearch',
})
export class ColorSearchPipe implements PipeTransform {
  transform(values: any[], searchText: string): any[] {
    if (!values || !searchText) {
      return values;
    }

    searchText = searchText.toLowerCase();

    return values.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchText) ||
        value.reference.toLowerCase().includes(searchText)
      );
    });
  }
}
