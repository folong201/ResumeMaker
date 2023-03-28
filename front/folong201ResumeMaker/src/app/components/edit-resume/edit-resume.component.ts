import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Education } from 'src/app/class/education/education';
import { Experience } from 'src/app/class/experience/experience';
import { Hobies } from 'src/app/class/hobies/hobies';
import { Skill } from 'src/app/class/skill';
import { Technic } from 'src/app/class/technic';
@Component({
  selector: 'app-edit-resume',
  templateUrl: './edit-resume.component.html',
  styleUrls: ['./edit-resume.component.css']
})
export class EditResumeComponent implements OnInit {

  themplateId: any | undefined
  update = false
  technical: any
  experience: any
  data: any
  name!: string
  proffession!: String
  email!: String
  phone!: String
  about!: String
  skills: any
  hobies!:any
  educations!:any
  public imagePath!: any
  imgURL: any;
  public message!: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.data.name = ''
    let id2 = this.route.snapshot.params['update']
    if (id2) {
      this.update = true
      console.log('this is a update route');

    }

    //initialisation of skill
    this.skills = []
    this.technical = []
    this.experience = []
    this.hobies = []
    this.educations = []
    this.addSkill()

  }

  addSkill() {
    var skill = new Skill()
    this.skills.push(skill)
  }
  addTechnique() {
    var tec = new Technic()
    this.technical.push(tec)
  }
  addExperience() {
    var epr = new Experience()
    this.experience.push(epr)
  }
  public removetec(i: any): void {
    var f = this.technical.splice(i, 1)
    // throw new Error('Method not implemented.');
  }
  removeexp(i: number) {
    var rest = this.experience.splice(i, 1)
    throw new Error('Method not implemented.');
  }
  public removeSkill(i: number): void {
    var rest = this.skills.splice(i, 1)
  }

  public removeEducation(i:number){
    this.educations = this.educations.splice(i,1)
    if (this.educations.length=0) {
      this.educations = []
    }
  }
  public addEducation(){
    alert("education add")
    let edu = new Education()
    this.educations.push(edu)
  }

  public removeHobie(i:number){
    this.hobies = this.hobies.splice(i,1)
    if (this.hobies.length = 0) {
      this.hobies = []
    }
  }
  public addHobie(){
    let hob = new Hobies()
    this.hobies.push(hob)
  }

  preview(files: any) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

}
