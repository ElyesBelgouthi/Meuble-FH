import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customerSearch',
})
export class CustomerSearchPipe implements PipeTransform {
  transform(values: any[], searchText: string): any[] {
    if (!values || !searchText) {
      return values;
    }

    searchText = searchText.toLowerCase();

    return values.filter((value) => {
      return value.title.toLowerCase().includes(searchText);
    });
  }
}
