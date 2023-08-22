import { Store } from '@ngxs/store';
import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { FormControl, FormGroup } from '@angular/forms';
import { UpdateSkill, removeSkill } from 'src/app/resume.actions';

@Component({
  selector: 'app-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css']
})
export class SkillItemComponent {
  @Input()
  index:any
  // panelOpenState = true
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 300;
  formcontroller = new FormGroup({
    name: new FormControl(),
    level: new FormControl(),
  })
  constructor(private store:Store){
    this.formcontroller.valueChanges.subscribe(()=>{
      this.store.dispatch(new UpdateSkill(this.formcontroller.value,this.index))
    })
  }
  delete(){
    this.store.dispatch(new removeSkill({ name: this.formcontroller.value.name, level: this.formcontroller.value.level},this.index))
  }
}
