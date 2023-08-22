import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ResumeState } from 'src/app/Resume.state';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CreateEducation } from 'src/app/resume.actions';

@Component({
  selector: 'app-education-component',
  templateUrl: './education-component.component.html',
  styleUrls: ['./education-component.component.css']
})
export class EducationComponentComponent implements OnInit{

  constructor(private store:Store){}
  ngOnInit(): void {
    console.log(this.list);
    console.log("ici le composant education init");
    //creer un tableau de formBuilder
  }
  trackByFn(index: number, item: any): number {
    return item.id;
  }

  // list = [1, 3, 5, 6]
  @Select(ResumeState.getEducation)
  list!:Observable<any>


  create() {
    this.store.dispatch(new CreateEducation({}))
  }
  panelOpenState = true
}
