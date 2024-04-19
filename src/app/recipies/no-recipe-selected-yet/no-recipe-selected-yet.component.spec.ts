import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoRecipeSelectedYetComponent } from './no-recipe-selected-yet.component';

describe('NoRecipeSelectedYetComponent', () => {
  let component: NoRecipeSelectedYetComponent;
  let fixture: ComponentFixture<NoRecipeSelectedYetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoRecipeSelectedYetComponent]
    });
    fixture = TestBed.createComponent(NoRecipeSelectedYetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
