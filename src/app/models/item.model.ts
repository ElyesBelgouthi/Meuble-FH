import { Color } from './color.model';
import { Photo } from './photo.model';

export class Item {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public category: string,
    public type: string,
    public height: number,
    public width: number,
    public price: number,
    public colors: Color[],
    public reference: string,
    public photos: Photo[]
  ) {}
}
