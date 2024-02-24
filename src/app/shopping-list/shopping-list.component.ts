import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients = [
    { name: 'Apple', quantity: 5 },
    { name: 'Grapes', quantity: 10 },
  ];
}
