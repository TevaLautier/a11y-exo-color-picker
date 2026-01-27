import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ColorOption {
  name: string;
  hex: string;
}

@Component({
  selector: 'atomic-color-selector',
  imports: [],
  templateUrl: './atomic-color-selector.html',
  styleUrl: './atomic-color-selector.css',
})
export class AtomicColorSelector { 
  // Les couleurs sont passées par le parent
  @Input({ required: true }) colors: ColorOption[] = [];

  // Permet de notifier le parent du changement de couleur
  @Output() colorChange = new EventEmitter<ColorOption>();

  selectedColor: ColorOption | null = null;

  /**
   * Cette méthode est appelée lors du changement de l'input radio.
   * On utilise l'événement 'change' plutôt que 'click' car c'est
   * l'événement naturel des éléments de formulaire.
   */
  selectColor(color: ColorOption) {
    this.selectedColor = color;
    this.colorChange.emit(color);
  }
}
