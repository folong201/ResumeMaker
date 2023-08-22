import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ResumeState } from 'src/app/Resume.state';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  personal!:any
  ngOnInit(): void {
    // this.personal.name = this.name
    // this.personal.familyName = this.familyName
    // this.personal.post = this.post
    // this.personal.codePostal = this.codePostal
    // this.personal.phone = this.phone
    // this.personal.email = this.email
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
  experiences!: Observable<any>
  @Select(ResumeState.getEmail)
  email!: Observable<string>
  @Select(ResumeState.getAdresse)
  adresse!: Observable<string>
  @Select(ResumeState.getEducation)
  educations!: Observable<any>
  @Select(ResumeState.getSkills)
  skills!: Observable<any>
  @Select(ResumeState.getLangues)
  languages!: Observable<any>
  @Select(ResumeState.getHobies)
  hobbies!: Observable<any>
  print(){
    //set the pdf name
    if (this.name == null) {
      alert("vous ne pouver pas creer un cv sans nom")
    } else {

      let DATA: any = document.getElementById('displayer');

      var doc = new jsPDF();

      // Source HTMLElement or a string containing HTML.
      var elementHTML = document.querySelector("#displayer");
      doc.html(DATA, {
        callback: function (doc) {
          // Save the PDF
          var name = localStorage.getItem("resumeName")
          doc.save((name != null) ? name : "Resume");
        },
        margin: [0, 0, 0,5],
        autoPaging: 'text',
        x: 0,
        y: 0,
        width: 200, //target width in the PDF document
        windowWidth: 650 //window width in CSS pixels
      });
    }
  }
}
