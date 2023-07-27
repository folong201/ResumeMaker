import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ThemeListComponent } from './pages/themes/theme-list/theme-list.component';
import { ResumeEditionComponent } from './pages/resume-edition/resume-edition.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  { path:'themes',component:ThemeListComponent},
  {path:'editor',component:ResumeEditionComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
