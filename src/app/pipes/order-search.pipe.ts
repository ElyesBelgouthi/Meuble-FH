import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderSearch',
})
export class OrderSearchPipe implements PipeTransform {
  transform(values: any[], searchText: string): any[] {
    if (!values || !searchText) {
      return values;
    }

    searchText = searchText.toLowerCase();

    return values.filter((value) => {
      return (
        value.firstName.toLowerCase().includes(searchText) ||
        value.lastName.toLowerCase().includes(searchText) ||
        value.reference.toLowerCase().includes(searchText)
      );
    });
  }
}
