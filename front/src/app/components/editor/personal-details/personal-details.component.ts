import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Store } from '@ngxs/store';
import { SetPersonnalDetails } from 'src/app/resume.actions';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {
  constructor(private store: Store) {
    this.formController.valueChanges.subscribe(() => {
      this.store.dispatch(new SetPersonnalDetails(this.formController.value))
    })
  }
  ngOnInit(): void {
    // this.updateState()
  }
  imagePreview!: string;
  @ViewChild('fileInput') fileInput: any;
  @Input() panelOpenState: any
  
  formController = new FormGroup(
    {
      name: new FormControl(''),
      familyName: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      post: new FormControl(''),
      adresse: new FormControl(''),
      codepostal: new FormControl(''),
      photo: new FormControl(''),
      ville: new FormControl('')
    }
  )


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


  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

}
