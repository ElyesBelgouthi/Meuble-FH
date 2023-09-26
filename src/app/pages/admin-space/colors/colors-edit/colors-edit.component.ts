import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Color } from 'src/app/models/color.model';
import { ColorService } from 'src/app/services/color.service';
import { ImageService } from 'src/app/services/image.service';
import { fileValidator } from 'src/app/shared/file.validator';

@Component({
  selector: 'app-colors-edit',
  templateUrl: './colors-edit.component.html',
  styleUrls: ['./colors-edit.component.css'],
})
export class ColorsEditComponent implements OnInit {
  form!: FormGroup;
  editMode!: boolean;
  id!: number;
  color!: Color;
  selectedFileName: string = 'Choisir une photo';
  imageSrc!: any;
  previewImage!: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private colorService: ColorService,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] !== undefined;
    });
    if (this.editMode) {
      this.colorService.getColorById(this.id).subscribe((color: Color) => {
        this.color = color;
        this.imageService.getImage(color.path).subscribe(
          (imageData) => {
            const reader = new FileReader();
            reader.onload = (e) => {
              this.imageSrc = e.target?.result;
            };
            reader.readAsDataURL(imageData);
          },
          (error) => {}
        );
        this.initForm();
      });
    } else {
      this.initForm();
    }
  }

  private initForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      reference: new FormControl(''),
      img: new FormControl(null, [fileValidator]),
    });

    if (this.editMode && this.color) {
      this.form.patchValue({
        id: this.color.id,
        name: this.color.name,
        reference: this.color.reference,
      });
    }
  }

  onFileChange(event: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const selectedFile = inputElement.files[0];
      this.selectedFileName = selectedFile.name;
      if (this.form.get('img')?.invalid) {
        return;
      }
      this.form.patchValue({
        img: selectedFile,
      });
      this.previewImage = URL.createObjectURL(selectedFile);
    } else {
      this.selectedFileName = 'Choisir une photo';
      this.form.patchValue({
        img: null,
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = new FormData();
      formData.append('name', this.form.value.name);
      if (this.form.value.img instanceof File) {
        formData.append('img', this.form.value.img);
      }
      if (this.editMode) {
        this.colorService.updateColor(this.id, formData).subscribe();
      } else {
        this.colorService.addColor(formData).subscribe();
      }
      this.router.navigate(['admin', 'colors']);
    }
  }
}
