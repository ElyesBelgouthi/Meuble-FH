import { Color } from './color.model';
import { Dimension } from './dimension.model';
import { Photo } from './photo.model';

export class Item {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public category: string,
    public type: string,

    public dimensions: Dimension[],
    public colors: Color[],
    public reference: string,
    public photos: Photo[]
  ) {}
}
