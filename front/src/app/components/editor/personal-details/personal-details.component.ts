import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  imagePreview!: string;
  @ViewChild('fileInput') fileInput: any;
  @Input() panelOpenState: any

  handleDrop(event: DragEvent) {
    event.preventDefault();
    const file = event.dataTransfer!.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target!.result as string;
      this.imagePreview = imageUrl;
      this.uploadFile(file);
    };
    reader.readAsDataURL(file);
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();
  }

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files![0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target!.result as string;
      this.imagePreview = imageUrl;
      this.uploadFile(file);
    };
    reader.readAsDataURL(file);
  }

  async uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
