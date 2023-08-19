import { Component, Input, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ResumeState } from 'src/app/Resume.state';
import { AddSkill, removeSkill } from 'src/app/resume.actions';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  constructor(private store:Store){}
  @Input()
  name!:Observable<string>

  @Select(ResumeState.getSkills)
  skills!: Observable<[]>
    ngOnInit(): void {
  }

  addskill(){
    this.store.dispatch(new AddSkill("skills x"))
  }
  removeSkill(skill:string){

    this.store.dispatch(new removeSkill(skill))
  }

}
