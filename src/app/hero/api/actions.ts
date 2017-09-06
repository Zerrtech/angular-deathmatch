import { Injectable } from '@angular/core';
import { dispatch } from '@angular-redux/store';
import { FluxStandardAction } from 'flux-standard-action';
import { IHero } from '../model';

// Flux-standard-action gives us stronger typing of our actions.
type Payload = IHero[];
interface MetaData { };
export type HeroAPIAction = FluxStandardAction<Payload, MetaData>;

@Injectable()
export class HeroAPIActions {
  static readonly LOAD_HEROES = 'LOAD_HEROES';
  static readonly LOAD_STARTED = 'LOAD_STARTED';
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
  static readonly LOAD_FAILED = 'LOAD_FAILED';

  @dispatch()
  loadHeroes = (): HeroAPIAction => ({
    type: HeroAPIActions.LOAD_HEROES,
    payload: [],
    meta: {}
  });

  loadStarted = (): HeroAPIAction => ({
    type: HeroAPIActions.LOAD_STARTED,
    payload: [],
    meta: {}
  })

  loadSucceeded = (payload: Payload): HeroAPIAction => ({
    type: HeroAPIActions.LOAD_SUCCEEDED,
    payload,
    meta: null
  })

  loadFailed = (error:any): HeroAPIAction => ({
    type: HeroAPIActions.LOAD_FAILED,
    payload: null,
    error,
    meta: null
  })

}
