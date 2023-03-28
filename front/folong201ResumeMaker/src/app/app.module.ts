import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DefaultComponent } from './components/themplates/default/default.component';
import { ListComponent } from './components/themplates/list/list.component';
import { EditResumeComponent } from './components/edit-resume/edit-resume.component';
import { Error404Component } from './components/erros/error404/error404.component';
import { PreviewSideComponent } from './components/preview-side/preview-side.component';
import { FormsModule } from '@angular/forms';
import { Compo2Component } from './components/themplates/compo2/compo2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DefaultComponent,
    ListComponent,
    EditResumeComponent,
    Error404Component,
    PreviewSideComponent,
    Compo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
