import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
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
import {  MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms'
import { MatExpansionModule } from '@angular/material/expansion';
import {  MatAutocompleteModule } from '@angular/material/autocomplete';
import {  MatChipsModule } from '@angular/material/chips';
import { PersonalDetailsComponent } from './components/editor/personal-details/personal-details.component';
import {  FormsModule  } from '@angular/forms';
import { EducationComponentComponent } from './components/editor/education-component/education-component.component';
import { ExperienceComponent } from './components/editor/experience/experience.component';
import { SkillComponent } from './components/editor/skill/skill.component';
import { LanguagesComponent } from './components/editor/languages/languages.component';
import { HobiesComponent } from './components/editor/hobies/hobies.component';
import { TechniquesComponent } from './components/editor/techniques/techniques.component';
import { NgxsModule } from '@ngxs/store';
import { ResumeState } from './Resume.state';
import { PreviewComponent } from './components/preview/preview.component';
import { EducationItemComponent } from './components/education-item/education-item.component';
import { ExperienceItemComponent } from './components/editor/experience-item/experience-item.component';
import { SkillItemComponent } from './components/editor/skill-item/skill-item.component';
import { LanguageItemComponent } from './components/editor/language-item/language-item.component';
// import {  resumeReducer } from './counter.reducer';



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
    EducationComponentComponent,
    ExperienceComponent,
    SkillComponent,
    LanguagesComponent,
    HobiesComponent,
    TechniquesComponent,
    PreviewComponent,
    EducationItemComponent,
    ExperienceItemComponent,
    SkillItemComponent,
    LanguageItemComponent
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
    MatProgressBarModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatChipsModule,
    MatIconModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    NgxsModule.forRoot([ResumeState], { developmentMode: true }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
