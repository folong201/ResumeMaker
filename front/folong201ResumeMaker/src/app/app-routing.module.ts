import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/themplates/default/default.component';
import { ListComponent } from './components/themplates/list/list.component';
import { EditResumeComponent } from './components/edit-resume/edit-resume.component';
import { Error404Component } from './components/erros/error404/error404.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'edit/:themplate/:update', component: EditResumeComponent },
  { path: '**', component: Error404Component ,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
