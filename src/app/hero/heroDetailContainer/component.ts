import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
  selector: 'hero-detail-container',
  template: '<hero-detail [hero]="hero"></hero-detail>'
})
export class HeroDetailContainerComponent {
  title = 'app';
  // Get elephant-related data out of the Redux store as observables.
  @select(['heroes', 'heroes']) // @select$(['heroes'], sortHeroes)
  readonly heroes$: Observable<IHero[]>;

  public hero: IHero;
      // params.get('id')
  ngOnInit() {
    this.heroes$.map(heroes => heroes.filter(hero => hero.id === 1)[0])
      .subscribe((hero: IHero) => this.hero = hero);
    // this.route.paramMap
    //   .switchMap((params: ParamMap) =>
    //     this.heroes$.map(heroes => heroes.filter(hero => hero.id === 1)[0])
    //   .subscribe((hero: IHero) => this.hero = hero);
  }

  constructor(
    private actions: HeroAPIActions,
    private route: ActivatedRoute,
    private router: Router
  ) {
    actions.loadHeroes();
  }
}
