import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailsComponent } from './recipies/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipies/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipies/recipe-list/recipe-item/recipe-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { NoRecipeSelectedYetComponent } from './recipies/no-recipe-selected-yet/no-recipe-selected-yet.component';
import { AddNewRecipeComponent } from './recipies/add-new-recipe/add-new-recipe.component';
import { LoginComponent } from './account/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipiesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    DropdownDirective,
    NoRecipeSelectedYetComponent,
    AddNewRecipeComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [DropdownDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
