import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ResumeState } from 'src/app/Resume.state';
import { CreateExperience } from 'src/app/resume.actions';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  constructor(private store:Store){}
  @Select(ResumeState.getExperience)
  list!:Observable<any>
  delete(index: number) {

  }

  create() {
    this.store.dispatch(new CreateExperience({}))
  }
  panelOpenState = true
  trackByFn(index: number, item: any): number {
    return item.id;
  }

}
