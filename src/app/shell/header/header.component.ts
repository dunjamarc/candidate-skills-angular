import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active = false;

  constructor() {}

  ngOnInit() {}

  addClass() {
    this.active = !this.active;
  }
}
