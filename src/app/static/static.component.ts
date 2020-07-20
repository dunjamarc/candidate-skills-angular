import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss'],
})
export class StaticComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
