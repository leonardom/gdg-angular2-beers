import { provideRouter, RouterConfig } from '@angular/router';

import { BeerListComponent } from './beers/beer-list.component';
import { BeerFormComponent } from './beers/beer-form.component';

const routes: RouterConfig = [
  { path: '', component: BeerListComponent },
  { path: 'list', component: BeerListComponent },
  { path: 'form', component: BeerFormComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
