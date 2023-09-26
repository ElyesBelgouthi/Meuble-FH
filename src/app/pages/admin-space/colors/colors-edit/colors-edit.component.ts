import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'src/app/models/color.model';
import { ColorService } from 'src/app/services/color.service';
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
  selectedFileName: string = 'choose a picture';
  imageSrc!: any;
  previewImage!: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {}

  private initForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      reference: new FormControl('', [Validators.required]),
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
      this.selectedFileName = 'choose a picture';
      this.form.patchValue({
        profilePicture: null,
      });
    }
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = new FormData();
      formData.append('name', this.form.value.name);
      formData.append('reference', this.form.value.lastName);
      if (this.form.value.img instanceof File) {
        formData.append('profilePicture', this.form.value.img);
      }
      if (this.editMode) {
        this.colorService.updateColor(this.id, formData);
      } else {
        this.colorService.addColor(formData);
      }
      this.router.navigate(['admin', 'colors']);
    }
  }
}
