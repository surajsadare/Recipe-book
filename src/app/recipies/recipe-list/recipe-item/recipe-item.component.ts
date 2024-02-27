import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent {
  @Input() recipe;
  @Output() recipeEvent = new EventEmitter<void>();

  emitEvent() {
    this.recipeEvent.emit();
  }
}
