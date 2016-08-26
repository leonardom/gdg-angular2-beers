import { Component } from '@angular/core';
import { provideRouter, RouterConfig } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { BeerListComponent } from './beers/beer-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ ROUTER_DIRECTIVES, BeerListComponent ]
})
export class AppComponent {
  title = 'Beers!';
}
