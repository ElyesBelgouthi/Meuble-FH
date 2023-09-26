import { Component } from '@angular/core';
import { Color } from 'src/app/models/color.model';

@Component({
  selector: 'app-colors-list',
  templateUrl: './colors-list.component.html',
  styleUrls: ['./colors-list.component.css'],
})
export class ColorsListComponent {
  p: number = 1;
  colors: Color[] = [
    new Color(1, 'lqfdlqsf', 'fqsfqsdf', 'qfdsfqsdf'),
    new Color(1, 'lqfdlqsf', 'fqsfqsdf', 'qfdsfqsdf'),
    new Color(1, 'lqfdlqsf', 'fqsfqsdf', 'qfdsfqsdf'),
    new Color(1, 'lqfdlqsf', 'fqsfqsdf', 'qfdsfqsdf'),
    new Color(1, 'lqfdlqsf', 'fqsfqsdf', 'qfdsfqsdf'),
    new Color(1, 'lqfdlqsf', 'fqsfqsdf', 'qfdsfqsdf'),
    new Color(1, 'lqfdlqsf', 'fqsfqsdf', 'qfdsfqsdf'),
  ];
  onSearch(event: any) {}

  onDelete(id: number, index: number, event: any) {}
}
