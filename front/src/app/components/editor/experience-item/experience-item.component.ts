import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { DeleteExperience, UpdateExperience } from 'src/app/resume.actions';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.css']
})
export class ExperienceItemComponent {
@Input()
index:any
constructor(private store:Store){
  this.formManager.valueChanges.subscribe(() => {
    this.store.dispatch(new UpdateExperience(this.formManager.value, this.index))
  })
}
delete(index:any){
console.log("supression");
  this.store.dispatch(new DeleteExperience({},this.index))
}
formManager = new FormGroup({
  name: new FormControl(),
  post: new FormControl(),
  town:new FormControl(),
  employer:new FormControl(),
  begin:new FormControl(),
  end: new FormControl(),
  description: new FormControl(),
})
}
