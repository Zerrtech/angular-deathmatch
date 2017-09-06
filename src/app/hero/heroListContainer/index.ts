import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { select, select$ } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { HeroAPIActions } from '../api/actions';
import { IHero } from '../model';

export const sortHeroes = (heroList$: Observable<IHero[]>) =>
  heroList$.map((data) => {
    data.sort((a, b) => {
      return b.power < a.power ? -1 : 1;
    });
    return data;
  })

@Component({
  selector: 'hero-list-container',
  template: '<hero-list [heroes]="heroes$ | async" (onSelect)="changeHero($event, hero)"></hero-list>'
})
export class HeroListContainerComponent {

  // Get data out of the Redux store as observables.
  @select$(['heroes', 'heroes'], sortHeroes)
  readonly heroes$: Observable<IHero[]>;

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
