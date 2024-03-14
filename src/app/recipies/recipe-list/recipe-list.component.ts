import { Component, OnInit } from '@angular/core';
import { RecipeListService } from '../recipe-list.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: any = [];
  constructor(private recipeListService: RecipeListService) {}

  ngOnInit(): void {
    this.recipes = this.recipeListService.getFromRecipies();
  }
}
