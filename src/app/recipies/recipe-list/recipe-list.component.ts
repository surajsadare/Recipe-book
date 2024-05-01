import { Component, OnInit } from '@angular/core';
import { RecipeListService } from '../recipe-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: any = [];
  constructor(
    private recipeListService: RecipeListService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeListService.getFromRecipies();
  }

  onAddNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
