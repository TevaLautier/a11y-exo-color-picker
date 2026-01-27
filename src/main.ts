import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  AtomicColorSelector,
  ColorOption,
} from './app/atomic-color-selector/atomic-color-selector';

@Component({
  selector: 'app-root',
  templateUrl: './main.html',
  imports: [AtomicColorSelector],
})
export class App {
  name = 'Angular';
  selected: string = '';
  myColors: ColorOption[] = [
    { name: 'Bleu Royal', hex: '#4169e1' },
    { name: 'Vert Émeraude', hex: '#50c878' },
    { name: 'Rouge Corail', hex: '#ff7f50' },
    { name: 'Jaune Ambre', hex: '#ffbf00' },
  ];

  handleThemeChange(color: ColorOption) {
    console.log('Nouveau thème sélectionné :', color.name);
    this.selected = color.name;
  }
}

bootstrapApplication(App);
