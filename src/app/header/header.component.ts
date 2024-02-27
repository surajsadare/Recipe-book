import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() selectFeature = new EventEmitter<string>();
  constructor() {}
  ngOnInit(): void {}

  changeFeature(feature: string) {
    this.selectFeature.emit(feature);
  }
}
