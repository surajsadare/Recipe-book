import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  @Output() recipeEvent = new EventEmitter<any>();
  private recipes = [
    {
      name: 'Burger',
      description: 'Try a once eat a daily',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    },
    {
      name: 'Pizza',
      description: 'Try a once eat a daily for sure',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    },
  ];
  constructor() {}

  getFromRecipies() {
    return this.recipes.slice();
  }
}
