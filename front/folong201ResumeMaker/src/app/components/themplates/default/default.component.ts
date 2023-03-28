import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  @Input()
  name!: String
  @Input()
  proffession!: String
  @Input()
  about!:any
  @Input()
  skills: any
  @Input()
  email!:String
  @Input()
  phone!:String
  @Input()
  technical:any
  @Input()
  experiennce:any
  @Input()
  imgURL!:any
  @Input()
  hobies!:any
  @Input()
  educations!:any
  constructor() { }

  ngOnInit(): void {
  }

}
