import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  item: string = '';
  qty!: number;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {}

  addItem() {
    this.shoppingListService.addIngredients(this.item, this.qty);
  }
}
