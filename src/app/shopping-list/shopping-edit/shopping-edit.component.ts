import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  editForm = false;
  @ViewChild('form', { static: false })
  form!: NgForm;
  selectedIngredientsIndex!: number;
  ingredients!: any;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.updateItem.subscribe(
      (index: number) => {
        this.editForm = true;
        this.selectedIngredientsIndex = index;
        this.ingredients =
          this.shoppingListService.getUpdatedIngredients(index);
        this.form.setValue({
          name: this.ingredients.name,
          quantity: this.ingredients.quantity,
        });
      }
    );
  }

  addItem(form: NgForm) {
    let value = form.value;
    this.shoppingListService.addIngredients(value.name, value.quantity);
  }
  updateIngredients(form) {
    let ingredients = { name: form.value.name, quantity: form.value.quantity };
    this.shoppingListService.updateSelectedIngredients(
      this.selectedIngredientsIndex,
      ingredients
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
