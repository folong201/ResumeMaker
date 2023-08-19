import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ResumeState } from 'src/app/Resume.state';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  ngOnInit(): void {

  }
  constructor(){}
  @Select(ResumeState.getName)
  name!:Observable<string>
  @Select(ResumeState.getFamilyName)
  familyName!: Observable<string>
  @Select(ResumeState.getPost)
  post!: Observable<string>
  @Select(ResumeState.getCodePostal)
  codePostal!: Observable<string>
  @Select(ResumeState.getPhone)
  phone!: Observable<string>
  @Select(ResumeState.getExperience)
  experiences!: Observable<string>[]
}
