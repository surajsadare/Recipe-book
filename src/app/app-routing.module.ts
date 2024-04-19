import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NoRecipeSelectedYetComponent } from './recipies/no-recipe-selected-yet/no-recipe-selected-yet.component';
import { RecipeDetailsComponent } from './recipies/recipe-details/recipe-details.component';
import { AddNewRecipeComponent } from './recipies/add-new-recipe/add-new-recipe.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipiesComponent,
    children: [
      { path: '', component: NoRecipeSelectedYetComponent },
      { path: 'details', component: RecipeDetailsComponent },
      { path: 'addRecipe', component: AddNewRecipeComponent },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
