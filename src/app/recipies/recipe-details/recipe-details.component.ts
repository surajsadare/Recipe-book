import { Component, Input, OnInit } from '@angular/core';
import { RecipeListService } from '../recipe-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() selectedRecipe;

  constructor(
    private recipeListService: RecipeListService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((x) => {
      let id = +x['id'];
      this.selectedRecipe = this.recipeListService.getRecipeById(id);
    });
  }

  addToshoppingIngredients() {
    this.recipeListService.addIngrdients(this.selectedRecipe.ingredients);
  }
}
