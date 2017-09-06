import { HeroListContainerComponent } from './heroListContainer';
import { HeroDetailContainerComponent } from './heroDetailContainer';

export const HeroRoutes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: HeroListContainerComponent },
  { path: 'hero/:id', component: HeroDetailContainerComponent }
];
