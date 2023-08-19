import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  list = [1, 3, 5, 6]
  delete(index: number) {
    this.list.splice(index, 1);
  }

  create() {
    this.list.push(2)
  }
  panelOpenState = true

}
