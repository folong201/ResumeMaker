import { Action, Select, Selector, State, StateContext } from "@ngxs/store"
import { AddSkill, CreateEducation, CreateExperience, CreateHobbie, CreateLanguage, DeleteEducation, DeleteExperience, DeleteHobbie, DeleteLanguage, removeSkill, SetPersonnalDetails, UpdateEducation, UpdateExperience, UpdateLanguage, UpdateSkill } from "./resume.actions"
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
  skills: any[]
  hobbies: any[]
  educations:any[]
  languages:any[]
  experiences: any[]
  techniques: any[]
}

const resumesample :any = {
  skills:[],
  name:"Folong",
  hobies:[],
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
    hobbies: resumesample.hobies,
    town:'',
    email:'',
    languages:[],
    educations:[{name:"",town:""}],
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
  static getEmail(resume:ResumeStateModel){
    return resume.email
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
  static getSkills(resume:ResumeStateModel){
    return resume.skills
  }
  @Selector()
  static getLangues(resume:ResumeStateModel){
    return resume.languages
  }

  @Selector()
  static getHobies(resume:ResumeStateModel){
    return resume.hobbies
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
  //fonctions sur le skills
  @Action(AddSkill)
   addSkill(ctx:StateContext<ResumeStateModel>,action:AddSkill){
    const skill = action.skill
    ctx.patchState({
      skills:[skill,...ctx.getState().skills]
    })
  }

  @Action(removeSkill)
  removeSkill(ctx: StateContext<ResumeStateModel>, action: removeSkill) {
    const skills = [...ctx.getState().skills]; // créer une copie de la liste
    const index = action.index;
    if (index > -1 && index < skills.length) {
      skills.splice(index, 1); // supprimer l'élément à l'index spécifié
      const newSkill = action.skill;
      ctx.patchState({
        skills: skills // ajouter le nouveau skill à la liste
      });
    }
  }

  @Action(UpdateSkill)
  updateSkill(ctx:StateContext<ResumeStateModel>,action:UpdateSkill){
    const skills = [...ctx.getState().skills]
    if (action.index>-1 && action.index<skills.length) {
      skills[action.index] = action.skill
      ctx.patchState({
        skills:skills
      })
    }
  }

  //fonctions sur l'education
  @Action(CreateEducation)
  createEducation(ctx: StateContext<ResumeStateModel>, action: CreateEducation) {
    const education = action.education
    // console.log(ctx.getState().educations);
    // alert(ctx.getState().educations[0].town)
    ctx.patchState({
      educations: [education, ...ctx.getState().educations]
    })
  }

  @Action(DeleteEducation)
  deleteEducation(ctx: StateContext<ResumeStateModel>, action: DeleteEducation) {
    const educations = [...ctx.getState().educations]; // créer une copie de l'objet educations
    const index = action.index;
    if (index > -1 && index < educations.length) {
      educations.splice(index, 1); // supprimer l'élément à l'index spécifié
      ctx.patchState({
        educations: educations
      });
    }
  }

  @Action(UpdateEducation)
  updateEducation(ctx: StateContext<ResumeStateModel>, action: UpdateEducation) {
    const educations = [...ctx.getState().educations]; // créer une copie de l'objet educations
    const index = action.index;
    if (index > -1 && index < educations.length) {
      educations[index] = action.education;
      ctx.patchState({
        educations: educations
      });
    }
  }

  ///fonctions sur l'eperiences
  @Action(CreateExperience)
  createExperience(ctx: StateContext<ResumeStateModel>, action: CreateExperience) {
    const experience = action.experience
    // console.log(ctx.getState().educations);
    // alert(ctx.getState().educations[0].town)
    ctx.patchState({
      experiences: [experience, ...ctx.getState().experiences]
    })
  }

  @Action(DeleteExperience)
  deleteExperience(ctx: StateContext<ResumeStateModel>, action: DeleteExperience) {
    const experiences = [...ctx.getState().experiences]; // créer une copie de l'objet educations
    const index = action.index;
    if (index > -1 && index < experiences.length) {
      experiences.splice(index, 1); // supprimer l'élément à l'index spécifié
      ctx.patchState({
        experiences: experiences
      });
    }
  }

  @Action(UpdateExperience)
  updateExperience(ctx: StateContext<ResumeStateModel>, action: UpdateExperience) {
    const experiences = [...ctx.getState().experiences]; // créer une copie de l'objet educations
    const index = action.index;
    if (index > -1 && index < experiences.length) {
      experiences[index] = action.experience;
      ctx.patchState({
        experiences: experiences
      });
    }
  }
  //fonctions sur le Language
  @Action(CreateLanguage)
  addLanguage(ctx: StateContext<ResumeStateModel>, action: CreateLanguage) {
    const language = action.language
    ctx.patchState({
      languages: [language,...ctx.getState().languages]
    })
  }

  @Action(DeleteLanguage)
  removeLanguage(ctx: StateContext<ResumeStateModel>, action: DeleteLanguage) {
    const languages = [...ctx.getState().languages]; // créer une copie de la liste
    const index = action.index;
    if (index > -1 && index < languages.length) {
      languages.splice(index, 1); // supprimer l'élément à l'index spécifié
      ctx.patchState({
        languages: languages // ajouter le nouveau skill à la liste
      });
    }
  }

  @Action(UpdateLanguage)
  updateLanguage(ctx: StateContext<ResumeStateModel>, action: UpdateLanguage) {
    const languages = [...ctx.getState().languages]
    if (action.index > -1 && action.index < languages.length) {
      languages[action.index] = action.language
      ctx.patchState({
        languages: languages
      })
    }
  }
//fonctions sur les hobbies
  @Action(CreateHobbie)
  addHobbies(ctx: StateContext<ResumeStateModel>, action: CreateHobbie) {
    ctx.patchState({
      hobbies: [...ctx.getState().hobbies, action.hobbie]
    })
  }

  @Action(DeleteHobbie)
  removeHobbies(ctx: StateContext<ResumeStateModel>, action: DeleteHobbie) {
    const languages = [...ctx.getState().hobbies]; // créer une copie de la liste
    const index = action.index;
    if (index > -1 && index < languages.length) {
      languages.splice(index, 1); // supprimer l'élément à l'index spécifié
      ctx.patchState({
        hobbies: languages // ajouter le nouveau skill à la liste
      });
    }
  }

  @Action(UpdateLanguage)
  updateHobbies(ctx: StateContext<ResumeStateModel>, action: UpdateLanguage) {
    // const languages = [...ctx.getState().languages]
    // if (action.index > -1 && action.index < languages.length) {
    //   languages[action.index] = action.language
    //   ctx.patchState({
    //     languages: languages
    //   })
    // }
  }
}
//
