import { HeroListContainerComponent } from './heroListContainer';
import { HeroDetailContainerComponent } from './heroDetailContainer';

export const HeroRoutes = [
  { path: '', component: HeroListContainerComponent },
  { path: 'hero/:id', component: HeroDetailContainerComponent }
];
