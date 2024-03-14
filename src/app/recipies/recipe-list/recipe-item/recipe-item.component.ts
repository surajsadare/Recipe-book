import { Component, Input, OnInit } from '@angular/core';
import { RecipeListService } from '../../recipe-list.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe;
  constructor(private recipeListService: RecipeListService) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  emitEvent() {
    this.recipeListService.recipeEvent.emit(this.recipe);
  }
}
