import { Component, OnInit } from '@angular/core';
import { RecipeListService } from './recipe-list.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.scss'],
})
export class RecipiesComponent implements OnInit {k
 
  selectedRecipe: any;

  constructor(private recipeListService:RecipeListService){}

  ngOnInit(): void {
    this.recipeListService.recipeEvent.subscribe(x=>{
      this.selectedRecipe = x;
    })
  }
}
