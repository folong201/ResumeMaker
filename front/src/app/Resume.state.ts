import { Action, Select, Selector, State, StateContext } from "@ngxs/store"
import { AddSkill, removeSkill, SetPersonnalDetails, UpdateSkill } from "./resume.actions"
import { Injectable } from "@angular/core"

export interface ResumeStateModel{
  curentModel:number
  name: string
  email: string
  familyName:string
  post: string
  phone: string
  adresse: string
  town:string
  codepostal:string
  skills: string[]
  hobies: any[]
  educations:any[]
  langues:any[]
  experiences: any[]
  techniques: any[]
}

const resumesample :any = {
  skills:[,'skills 1',"skills 2"],
  name:"Folong",
  hobies:['hobie 1',"hobie 2","hobie 3"],
  familyName:""
}

@State<ResumeStateModel>({
  name:'resume',
  defaults: {
    name: resumesample.name,
    familyName:resumesample.familyName,
    curentModel:1,
    post:'post default',
    phone:'659545257',
    adresse:'123 west aveny kenedy',
    codepostal:'postal 432',
    skills: resumesample.skills,
    hobies: resumesample.hobies,
    town:'',
    email:'',
    langues:[],
    educations:[],
    experiences:[],
    techniques:[],
  }
})
@Injectable()
export class ResumeState{
//selectors on everything
  @Selector()
  static getName(resume:ResumeStateModel){
    return resume.name
  }
  @Selector()
  static getFamilyName(resume:ResumeStateModel){
    return resume.familyName
  }
  @Selector()
  static getCurentModel(resume:ResumeStateModel){
    return resume.curentModel
  }
  @Selector()
  static getPost(resume:ResumeStateModel){
    return resume.post
  }
  @Selector()
  static getPhone(resume:ResumeStateModel){
    return resume.phone
  }

  @Selector()
  static getCodePostal( resume:ResumeStateModel){
    return resume.codepostal
  }
  @Selector()
  static getAdresse(resume:ResumeStateModel){
    return resume.adresse
  }

  @Selector()
  static getSkills(Resume:ResumeStateModel){
    return Resume.skills
  }
  @Selector()
  static getLangues(resume:ResumeStateModel){
    return resume.langues
  }

  @Selector()
  static getHobies(resume:ResumeStateModel){
    return resume.hobies
  }

  @Selector()
  static getEducation(resume:ResumeStateModel){
    return resume.educations
  }
  @Selector()
  static getExperience(resume:ResumeStateModel){
    return resume.experiences
  }

  @Selector()
  static getTechnique(resume:ResumeStateModel){
    return resume.techniques
  }

//actions on everything
//skill action

@Action(SetPersonnalDetails)
setpersonalDetails(ctx:StateContext<ResumeStateModel>,action:SetPersonnalDetails){
  ctx.patchState({
    name: action.personnalInfo.name,
    familyName: action.personnalInfo.familyname,
    phone: action.personnalInfo.phone,
    adresse: action.personnalInfo.adresse,
    email: action.personnalInfo.email,
    post: action.personnalInfo.post,
    town: action.personnalInfo.town,
    codepostal: action.personnalInfo.codepostal,
  })
}
  @Action(AddSkill)
   addSkill(ctx:StateContext<ResumeStateModel>,action:AddSkill){
    const skill = action.skill
    ctx.patchState({
      skills:[skill,...ctx.getState().skills]
    })
  }

  @Action(removeSkill)
  removeSkill(ctx:StateContext<ResumeStateModel>,action:removeSkill){
   const  skills = ctx.getState().skills
    ctx.patchState({
      skills:skills.filter(skill=>skill!==action.skill)
    })
  }

  @Action(UpdateSkill)
  updateSkill(ctx:StateContext<ResumeStateModel>,action:UpdateSkill){
    ctx.patchState({
      skills:action.skills
    })
  }
}
//
