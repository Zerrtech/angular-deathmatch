import { HeroAPIAction, HeroAPIActions } from './actions';
import { IHeroList } from '../model';
import { Action } from 'redux';

const INITIAL_STATE: IHeroList = {
  heroes: [],
  loading: false,
  error: null,
};

export function createHeroAPIReducer() {
  return function heroReducer(state: IHeroList = INITIAL_STATE,
    a: Action): IHeroList {

    const action = a as HeroAPIAction;

    switch (action.type) {
      case HeroAPIActions.LOAD_STARTED:
        return {
          ...state,
          heroes: [],
          loading: true,
          error: null,
        };
      case HeroAPIActions.LOAD_SUCCEEDED:
        return {
          ...state,
          heroes: action.payload,
          loading: false,
          error: null,
        };
      case HeroAPIActions.LOAD_FAILED:
        return {
          ...state,
          heroes: [],
          loading: false,
          error: action.error,
        };
    }

    return state;
  };
}
