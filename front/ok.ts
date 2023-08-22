import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-preview-side',
  templateUrl: './preview-side.component.html',
  styleUrls: ['./preview-side.component.css']
})
export class PreviewSideComponent implements OnInit {
  @Input()
  name!: any
  @Input()
  proffession!: String
  @Input()
  about!: String
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
  thamplate!: any
  @Input()
  hobies!: any
  @Input()
  educations!: any



  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.thamplate = this.route.snapshot.params['themplate']
  }
  dawnload() {
    this.SavePDF()
  }
  // @ViewChild('content') content!: ElementRef;
  public SavePDF(): void {
    //set the pdf name
    if (this.name == null) {
      alert("vous ne pouver pas creer un cv sans nom")
    } else {

      let DATA: any = document.getElementById('htmlData');

      var doc = new jsPDF();

      // Source HTMLElement or a string containing HTML.
      var elementHTML = document.querySelector("#contnet");
      doc.html(DATA, {
        callback: function (doc) {
          // Save the PDF
          var name = localStorage.getItem("resumeName")
          doc.save((name != null) ? name : "Resume");
        },
        margin: [10, 10, 10, 10],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 100, //target width in the PDF document
        windowWidth: 650 //window width in CSS pixels
      });
    }
  }


  public getResumeName() {
    return localStorage.getItem("resumeName")
  }
  public setResumeName() {
    localStorage.setItem("resumeName", this.name)
  }
}
