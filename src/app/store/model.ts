import { IHeroList } from '../hero/model';

export interface IAppState {
  heroes: IHeroList;
  routes?: any;
}

export const initialAppState: IAppState = {
  heroes: {
    heroes: [],
    loading: false,
    error: null
  }
};
