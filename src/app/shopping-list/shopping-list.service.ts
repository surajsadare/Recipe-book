import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients = [
    { name: 'Apple', quantity: 5 },
    { name: 'Grapes', quantity: 10 },
  ];
  addnewIngredients = new Subject<any>();
  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(item, qty) {
    const ingredient = { name: item, quantity: Number(qty) };
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
    this.addnewIngredients.next(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ingredients) {
    this.ingredients.push(...ingredients);
    this.addnewIngredients.next(this.ingredients.slice());
  }
}
