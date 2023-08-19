// import { createAction } from '@ngrx/store';

// export const increment = createAction('[Counter] Increment',(val: any) => ({ val }));
// export const decrement = createAction('[Counter] Decrement', (index: any) => ({ index }));
// export const reset = createAction('[Counter] Reset');



import { createAction,props } from '@ngrx/store';
import { Resume } from './resume';

export class AddSkill {
  static readonly type = '[Resume] AddSkill'
  constructor(public skill:string){}
}
export class removeSkill{
  static readonly type = '[Resume] RemoveSkill'
  constructor(public skill:string){}
}
export class addHobby{
  static readonly type = '[Resume] AddHobby'
  constructor (public hobie:any){}
}
export class removeHobby {
  static readonly type = '[Resume] RemoveHobby'
}
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
  constructor(public skills:any){}
}

export class SetPersonnalDetails{
  static readonly type = '[Resume] setdetails'
  constructor(public personnalInfo:any){}
}
// props<{ game: Game }>()
