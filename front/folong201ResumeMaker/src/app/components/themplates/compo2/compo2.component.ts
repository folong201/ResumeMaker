import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.css']
})
export class Compo2Component implements OnInit {
  @Input()
  name!: String
  @Input()
  proffession!: String
  @Input()
  about!: any
  @Input()
  skills: any
  @Input()
  email!: String
  @Input()
  phone!: String
  @Input()
  technical: any
  @Input()
  experiennce: any
  @Input()
  imgURL!: any
  @Input()
  hobies!:any
  @Input()
  educations!:any
  constructor() { }

  ngOnInit(): void {
  }

}
