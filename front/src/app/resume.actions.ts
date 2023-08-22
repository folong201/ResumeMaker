// import { createAction } from '@ngrx/store';

// export const increment = createAction('[Counter] Increment',(val: any) => ({ val }));
// export const decrement = createAction('[Counter] Decrement', (index: any) => ({ index }));
// export const reset = createAction('[Counter] Reset');



import { createAction,props } from '@ngrx/store';
import { Resume } from './resume';

export class AddSkill {
  static readonly type = '[Resume] AddSkill'
  constructor(public skill:any){}
}
export class removeSkill{
  static readonly type = '[Resume] RemoveSkill'
  constructor(public skill:any,public index:any){}
}
// export class addHobby{
//   static readonly type = '[Resume] AddHobby'
//   constructor (public hobie:any){}
// }
// export class removeHobby {
//   static readonly type = '[Resume] RemoveHobby'
// }
export class setName
{
  static readonly type = '[Resume] SetName'
  constructor(public name:string){}
}
export class setEmail {
  static readonly type = '[Resume] SetEmail'
  constructor(public email:string){}
}

export class UpdateSkill{
  static readonly type = '[Resume] update Skill '
  constructor(public skill:any,public index:any){}
}

export class SetPersonnalDetails{
  static readonly type = '[Resume] setdetails'
  constructor(public personnalInfo:any){}
}
// FONCTIONS SUR L'EDUCATION
export class CreateEducation{
  static readonly type = '[Resume] Create Education'
  constructor(public education:any){}
}
export class UpdateEducation {
  static readonly type = '[Resume] Update Education'
  constructor(public education: any,public index:any) { }
}
export class DeleteEducation {
  static readonly type = '[Resume] Delete Education'
  constructor(public education: any,public index:any) { }
}


// Classe pour l'experience
export class CreateExperience {
  static readonly type = '[Resume] Create Experience'
  constructor(public experience: any) { }
}
export class UpdateExperience {
  static readonly type = '[Resume] Update Experience'
  constructor(public experience: any, public index: any) { }
}
export class DeleteExperience {
  static readonly type = '[Resume] Delete Experience'
  constructor(public experience: any, public index: any) { }
}

//action pour la langue

export class CreateLanguage {
  static readonly type = '[Resume] Create Language'
  constructor(public language: any) { }
}
export class UpdateLanguage {
  static readonly type = '[Resume] Update Language'
  constructor(public language: any, public index: any) { }
}
export class DeleteLanguage {
  static readonly type = '[Resume] Delete Language'
  constructor(public language: any, public index: any) { }
}

//classes pour les hobies
export class CreateHobbie {
  static readonly type = '[Resume] Create Hobbie'
  constructor(public hobbie: any) { }
}
export class UpdateHobbie {
  static readonly type = '[Resume] Update Hobbie'
  constructor(public hobbie: any, public index: any) { }
}
export class DeleteHobbie {
  static readonly type = '[Resume] Delete Hobbie'
  constructor(public hobbie: any, public index: any) { }
}
