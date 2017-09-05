import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select, select$ } from '@angular-redux/store';
//import { pipe, values, sortBy, prop } from 'ramda';
import { Observable } from 'rxjs/Observable';

import { HeroAPIActions } from './hero/api/actions';
import { IHero } from './hero/model';

// export const sortHeroes = (heroList$: Observable<[]>) =>
//   animalDictionary$.map(
//     pipe(
//       values,
//       sortBy(prop('name'))));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // Get elephant-related data out of the Redux store as observables.
  @select(['heroes', 'heroes']) // @select$(['heroes'], sortHeroes)
  readonly heroes$: Observable<IHero[]>;

  @select(['heroes', 'loading'])
  readonly loading$: Observable<boolean>;

  @select(['heroes', 'error'])
  readonly error$: Observable<any>;

  constructor(actions: HeroAPIActions) {
    actions.loadHeroes();
  }
}
