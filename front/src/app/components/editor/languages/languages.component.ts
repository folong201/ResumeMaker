import { CreateLanguage } from './../../../resume.actions';
import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { Select, Store } from '@ngxs/store';
import { ResumeState } from 'src/app/Resume.state';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  @Select(ResumeState.getLangues)
  list!:Observable<any>
  constructor(private store:Store){

  }

  create() {
    this.store.dispatch(new CreateLanguage({name:'',level:''}))
  }
  trackByFn(index: number, item: any): number {
    return item.id;
  }
  panelOpenState = true
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 300;
}
