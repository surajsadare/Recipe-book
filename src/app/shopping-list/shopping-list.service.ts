import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredients = [
    { name: 'Apple', quantity: 5 },
    { name: 'Grapes', quantity: 10 },
  ];
  addnewIngredients = new EventEmitter<any>();
  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(item, qty) {
    const ingredient = { name: item, quantity: Number(qty) };
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
    this.addnewIngredients.emit(ingredient);
  }
}
