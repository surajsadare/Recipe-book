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
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHy3sDN8ktVdEsoGLX5HQwjDWpfYsm8259_cdIWWZYA&s',
    },
    {
      name: 'Pizza',
      description: 'Try a once eat a daily for sure',
      imagePath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpISLzf2yeqCLYdGAm14256zLbsa4yI8hWEg&s',
    },
  ];
  constructor() {}

  getFromRecipies() {
    return this.recipes.slice();
  }
}
