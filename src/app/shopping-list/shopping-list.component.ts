import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: any = [];
  subScription!: Subscription;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subScription = this.shoppingListService.addnewIngredients.subscribe(
      (res) => {
        this.ingredients = [];
        this.ingredients.push(...res);
      }
    );
  }

  ngOnDestroy(): void {
    this.subScription.unsubscribe();
  }

  editSelectedItem(index: number) {
    this.shoppingListService.updateItem.next(index);
  }
}
