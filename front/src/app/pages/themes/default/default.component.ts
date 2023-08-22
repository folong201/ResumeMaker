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
  name!: Observable<string>
  @Input()
  familyName!: Observable<string>
  @Input()
  post!: Observable<string>
  @Input()
  phone!: Observable<string>
  @Input()
  town!: Observable<string>
  @Input()
  email!: Observable<string>
  @Input()
  personal!:any
  @Input()
  adresse!: any
  @Input()
  educations!:Observable<any>
  @Input()
  experiences!: Observable<any>
  @Input()
  skills!: Observable<any>
  @Input()
  languages!: Observable<any>
  @Input()
  hobbies!: Observable<any>

  // @Select(ResumeState.getSkills)
  // skills!: Observable<[]>
  // @Select(ResumeState.getPost)
  // post!:Observable<string>
    ngOnInit(): void {
  }

}
