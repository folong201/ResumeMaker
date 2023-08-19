import { Component } from '@angular/core';

@Component({
  selector: 'app-education-component',
  templateUrl: './education-component.component.html',
  styleUrls: ['./education-component.component.css']
})
export class EducationComponentComponent {
  list = [1, 3, 5, 6]
  delete(index: number) {
    this.list.splice(index, 1);
  }

  create() {
    this.list.push(2)
  }
  panelOpenState = true
}
