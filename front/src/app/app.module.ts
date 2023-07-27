import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DefaultComponent } from './pages/themes/default/default.component';
import { ModelPresentationComponent } from './pages/model-presentation/model-presentation.component';
import { ResumeEditionComponent } from './pages/resume-edition/resume-edition.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ThemeListComponent } from './pages/themes/theme-list/theme-list.component';



//material design modules
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms'
import { MatExpansionModule } from '@angular/material/expansion';
import { PersonalDetailsComponent } from './components/editor/personal-details/personal-details.component';
import {  FormsModule  } from '@angular/forms';
import { EducationComponentComponent } from './components/editor/education-component/education-component.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    DefaultComponent,
    ModelPresentationComponent,
    ResumeEditionComponent,
    NavBarComponent,
    ThemeListComponent,
    PersonalDetailsComponent,
    EducationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
