import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Color } from 'src/app/models/color.model';
import { Item } from 'src/app/models/item.model';
import { ColorService } from 'src/app/services/color.service';
import { ImageService } from 'src/app/services/image.service';
import ItemService from 'src/app/services/item.service';
import { fileValidator } from 'src/app/shared/file.validator';

@Component({
  selector: 'app-items-edit',
  templateUrl: './items-edit.component.html',
  styleUrls: ['./items-edit.component.css'],
})
export class ItemsEditComponent implements OnInit {
  form!: FormGroup;
  editMode!: boolean;
  id!: number;
  item!: Item;
  imageSrc!: any;
  previewImages: any[] = [];
  sendingPhotos: any[] = [];
  colors!: Color[];
  colorIds!: number[];
  categories: string[] = ['Chaise', 'Bureau', 'Etagère', 'Comptoir'];
  types: string[] = ['Moderne', 'Classique'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itemService: ItemService,
    private colorService: ColorService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.colorService.getColors().subscribe((colors: Color[]) => {
      this.colors = colors;
    });

    this.initForm();
    // });
    // this.route.params.subscribe((params: Params) => {
    //   this.id = params['id'];
    //   this.editMode = params['id'] !== undefined;
    // });
    // if (this.editMode) {
    //   this.itemService.getItemById(this.id).subscribe((item: Item) => {
    //     this.item = item;
    //     this.imageService.getImage(item.path).subscribe(
    //       (imageData) => {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //           this.imageSrc = e.target?.result;
    //         };
    //         reader.readAsDataURL(imageData);
    //       },
    //       (error) => {}
    //     );
    //     this.initForm();
    //   });
    // } else {
    // }
  }

  private initForm() {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      reference: new FormControl(''),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
      height: new FormControl(0, [Validators.required]),
      width: new FormControl(0, [Validators.required]),
      price: new FormControl(0, [Validators.required]),

      colorIds: new FormArray([], [Validators.required]),

      photo: new FormControl(null, [fileValidator]),
      photos: new FormControl([], []),
    });

    if (this.editMode && this.item) {
      this.form.patchValue({
        id: this.item.id,
        title: this.item.title,
        reference: this.item.reference,
        description: this.item.description,
        category: this.item.category,
        type: this.item.type,
        height: this.item.height,
        width: this.item.width,
        price: this.item.price,
        colorIds: this.item.colorIds,
      });
    }
  }

  onColorCheckboxChange(event: any, colorId: number) {
    const colorIdsFormArray = this.form.get('colorIds') as FormArray;
    if (event.target.checked) {
      colorIdsFormArray.push(new FormControl(colorId));
    } else {
      const index = colorIdsFormArray.controls.findIndex(
        (x: AbstractControl) => x.value === colorId
      );
      if (index >= 0) {
        colorIdsFormArray.removeAt(index);
      }
    }
  }

  onFileChange(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const selectedFile = inputElement.files[0];
      if (this.form.get('photo')?.invalid) {
        return;
      }
      this.sendingPhotos.push(selectedFile);
      this.form.patchValue({
        photos: this.sendingPhotos,
      });
      this.previewImages.push(URL.createObjectURL(selectedFile));
    }
    console.log(this.previewImages);
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = new FormData();
      formData.append('title', this.form.value.title);
      formData.append('description', this.form.value.description);
      formData.append('category', this.form.value.category);
      formData.append('type', this.form.value.type);
      formData.append('height', this.form.value.height);
      formData.append('width', this.form.value.width);
      formData.append('price', this.form.value.price);
      formData.append('colorIds', this.form.value.colorIds);
      if (this.sendingPhotos.length > 0)
        formData.append('photos', this.form.value.photos);

      if (this.editMode) {
        this.itemService.updateItem(this.id, formData).subscribe();
      } else {
        this.itemService.addItem(formData).subscribe();
      }
      this.router.navigate(['admin', 'items']);
    }
  }
}
