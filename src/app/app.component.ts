import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'recipe-book';
  tab = 'recipe';
  constructor() {}

  changeTab(feature) {
    this.tab = feature;
  }
}
