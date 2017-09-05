import { AppComponent } from './app.component';
import { HeroListContainerComponent } from './hero/heroListContainer/component';
import { HeroDetailContainerComponent } from './hero/heroDetailContainer/component';

export const appRoutes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HeroListContainerComponent },
  { path: 'hero/:id', component: HeroDetailContainerComponent }
];
