import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';

import { IAppState } from '../../store/model';
import { HeroAPIAction, HeroAPIActions } from './actions';
import { HeroAPIService } from './service';

const heroesNotAlreadyFetched = (
  state: IAppState): boolean => !(
    state &&
    state.heroes &&
    state.heroes.heroes.length);

@Injectable()
export class HeroAPIEpics {
  constructor(
    private service: HeroAPIService,
    private actions: HeroAPIActions,
  ) {}

  public createEpic() {
    return createEpicMiddleware(this.createLoadHeroEpic());
  }

  private createLoadHeroEpic(): Epic<HeroAPIAction, IAppState> {
    return (action$, store) => action$
      .ofType(HeroAPIActions.LOAD_HEROES)
      .filter(() => heroesNotAlreadyFetched(store.getState()))
      .switchMap(() => this.service.getAll()
        .map(data => this.actions.loadSucceeded(data))
        .catch(response => of(this.actions.loadFailed({
          status: '' + response.status,
        })))
        .startWith(this.actions.loadStarted()));
  }
}
