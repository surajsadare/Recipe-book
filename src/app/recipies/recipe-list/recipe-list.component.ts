import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent {
  recipes = [
    {
      name: 'Burger',
      description: 'Try a once eat a daily',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
    },
  ];
}
