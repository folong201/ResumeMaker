import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  list = [1, 3, 5, 6]
  delete(index: number) {
    this.list.splice(index, 1);
  }

  create() {
    this.list.push(2)
  }
  panelOpenState = true
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 300;
}
