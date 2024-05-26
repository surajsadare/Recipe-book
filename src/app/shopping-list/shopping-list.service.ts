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
  updateItem = new Subject<number>();
  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(item, qty) {
    const ingredient = { name: item, quantity: qty };
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
    this.addnewIngredients.next(this.ingredients.slice());
  }

  addIngredientsFromRecipe(ingredients) {
    this.ingredients.push(...ingredients);
    this.addnewIngredients.next(this.ingredients.slice());
  }

  getUpdatedIngredients(index: number) {
    return this.ingredients[index];
  }
  updateSelectedIngredients(index: number, item: any) {
    this.ingredients[index] = item;
    this.addnewIngredients.next(this.ingredients.slice());
  }
}
