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
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DropdownDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
