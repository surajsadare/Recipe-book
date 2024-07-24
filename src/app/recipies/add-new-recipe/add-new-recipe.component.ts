import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-new-recipe',
  templateUrl: './add-new-recipe.component.html',
  styleUrls: ['./add-new-recipe.component.scss'],
})
export class AddNewRecipeComponent implements OnInit {
  isEdit = false;
  recipeForm!: FormGroup;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.isEdit = params['id'] != null;
      console.log(this.isEdit);
    });
  }
}
