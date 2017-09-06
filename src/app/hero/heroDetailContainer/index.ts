import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { select, select$ } from '@angular-redux/store';
//import { pipe, values, sortBy, prop } from 'ramda';
import { Observable } from 'rxjs/Observable';

import { HeroAPIActions } from '../api/actions';
import { IHero } from '../model';

@Component({
  selector: 'hero-detail-container',
  template: '<hero-detail [hero]="hero" (onClose)="onClose()"></hero-detail>'
})
export class HeroDetailContainerComponent {

  // Get data out of the Redux store as observables.
  @select(['heroes', 'heroes'])
  readonly heroes$: Observable<IHero[]>;
  private sub: any;
  public hero: IHero;

  // parse out the params to the route and get the appropriate hero
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      var id = parseInt(params['id']);
      this.heroes$.map(heroes => heroes.filter(hero => hero.id === id)[0])
        .subscribe((hero: IHero) => this.hero = hero);
    })
  }

  onClose() {
    this.router.navigate(['']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  constructor(
    private actions: HeroAPIActions,
    private route: ActivatedRoute,
    private router: Router
  ) {
    actions.loadHeroes();
  }
}
