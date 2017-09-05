import { HeroListContainerComponent } from './heroListContainer/component';
import { HeroDetailContainerComponent } from './heroDetailContainer/component';

export const HeroRoutes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroListContainerComponent },
  { path: 'hero/:id', component: HeroDetailContainerComponent }
];
