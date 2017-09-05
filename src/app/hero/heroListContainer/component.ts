import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { select, select$ } from '@angular-redux/store';
//import { pipe, values, sortBy, prop } from 'ramda';
import { Observable } from 'rxjs/Observable';

import { HeroAPIActions } from '../api/actions';
import { IHero } from '../model';

// export const sortHeroes = (heroList$: Observable<[]>) =>
//   animalDictionary$.map(
//     pipe(
//       values,
//       sortBy(prop('name'))));

@Component({
  selector: 'hero-list-container',
  template: '<hero-list [heroes]="heroes$ | async" (onSelect)="changeHero($event, hero)"></hero-list>'
})
export class HeroListContainerComponent {
  title = 'app';
  // Get data out of the Redux store as observables.
  @select(['heroes', 'heroes']) // @select$(['heroes'], sortHeroes)
  readonly heroes$: Observable<IHero[]>;

  @select(['heroes', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['heroes', 'error'])
  readonly error$: Observable<any>;

  changeHero(hero: IHero) {
    this.router.navigate(['/hero', hero.id]);
  }

  constructor(
    actions: HeroAPIActions,
    private router: Router
  ) {
    actions.loadHeroes();
  }
}
