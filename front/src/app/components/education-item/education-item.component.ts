import { Observable, async } from 'rxjs';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ResumeState } from 'src/app/Resume.state';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DeleteEducation, UpdateEducation } from 'src/app/resume.actions';
import { select } from '@ngrx/store';
@Component({
  selector: 'app-education-item',
  templateUrl: './education-item.component.html',
  styleUrls: ['./education-item.component.css']
})

export class EducationItemComponent {
  @Input() index:any


  constructor(private store:Store){
    this.formgroupList.valueChanges.subscribe(() => {
      this.store.dispatch(new UpdateEducation(this.formgroupList.value,this.index))
    })
  }
  formgroupList = new FormGroup({
    name: new FormControl(),
    school: new FormControl(),
    town: new FormControl(),
    description: new FormControl(),
    begin: new FormControl(),
    end: new FormControl(),
  })

  delete(){
    this.store.dispatch(new DeleteEducation(this.formgroupList.value,this.index))
  }
  panelOpenState = true
}
