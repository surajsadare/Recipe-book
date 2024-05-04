import { EventEmitter, Injectable, Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeListService {
  private recipes = [
    {
      name: 'Burger',
      description: 'Try a once eat a daily',
      imagePath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHy3sDN8ktVdEsoGLX5HQwjDWpfYsm8259_cdIWWZYA&s',
      ingredients: [
        { name: 'Bread', quantity: 2 },
        { name: 'meet', quantity: 2 },
      ],
    },
    {
      name: 'Pizza',
      description: 'Try a once eat a daily for sure',
      imagePath:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpISLzf2yeqCLYdGAm14256zLbsa4yI8hWEg&s',
      ingredients: [
        { name: 'Base', quantity: 2 },
        { name: 'meet', quantity: 5 },
      ],
    },
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  getFromRecipies() {
    return this.recipes.slice();
  }
  addIngrdients(ingredients) {
    this.shoppingListService.addIngredientsFromRecipe(ingredients);
  }
  getRecipeById(id: any) {
    return this.recipes[id];
  }
}
