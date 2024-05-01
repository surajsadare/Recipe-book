import { Component, Input, OnInit } from '@angular/core';
import { RecipeListService } from '../recipe-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() selectedRecipe;
  id!: number;

  constructor(
    private recipeListService: RecipeListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((x) => {
      this.id = +x['id'];
      this.selectedRecipe = this.recipeListService.getRecipeById(this.id);
    });
  }

  addToshoppingIngredients() {
    this.recipeListService.addIngrdients(this.selectedRecipe.ingredients);
  }

  onEditRecipe() {
    //this.router.navigate(['edit'], { relativeTo: this.route });
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }
}
