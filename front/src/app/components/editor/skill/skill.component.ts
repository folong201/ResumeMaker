import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { select } from '@ngrx/store';
import { ResumeState } from 'src/app/Resume.state';
import { Select, Store } from '@ngxs/store';
import { AddSkill } from 'src/app/resume.actions';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  constructor(private store: Store) { }

  @Select(ResumeState.getSkills)
  list!:Observable<any[]>

  delete(index: number) {
    // this.list.splice(index, 1);
  }

  create() {
    this.store.dispatch(new AddSkill({name:'',level:''}))
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
