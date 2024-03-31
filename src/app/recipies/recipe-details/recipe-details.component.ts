import { Component, Input, OnInit } from '@angular/core';
import { RecipeListService } from '../recipe-list.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() selectedRecipe;

  constructor(private recipeListService: RecipeListService) {}
  ngOnInit(): void {}

  addToshoppingIngredients() {
    this.recipeListService.addIngrdients(this.selectedRecipe.ingredients);
  }
}
