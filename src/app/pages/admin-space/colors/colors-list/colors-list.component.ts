import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-colors-list',
  templateUrl: './colors-list.component.html',
  styleUrls: ['./colors-list.component.css'],
})
export class ColorsListComponent implements OnInit {
  p: number = 1;
  colors!: Color[];
  searchText!: string;

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.colorService.getColors().subscribe((colors: Color[]) => {
      this.colors = colors;
    });
  }
  onSearch(event: any) {
    this.searchText = event.target?.value;
  }

  onDelete(id: number, index: number, event: Event) {
    event.stopPropagation();
    this.colorService.deleteColor(id);
    this.colors.splice(index, 1);
  }
}
