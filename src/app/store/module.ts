import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
// import {
//   applyMiddleware,
//   Store,
//   combineReducers,
//   compose,
//   createStore
// } from 'redux';
// Redux ecosystem stuff.
import { createLogger } from 'redux-logger';

// The top-level reducers and epics that make up our app's logic.
import { IAppState } from './model';
import { rootReducer } from './reducers';
import { RootEpics } from './epics';

// export const store: Store<IAppState> = createStore(
//   rootReducer,
//   applyMiddleware(createLogger())
// );

@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule],
  providers: [RootEpics],
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
    rootEpics: RootEpics,
  ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer,
      // JRZ I should not have to define this here, sub-stores should define their own inital state
      {heroes: { heroes: [], loading: false, error: null }},
      [ createLogger(), ...rootEpics.createEpics() ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

    // Enable syncing of Angular router state with our Redux store.
    if (ngReduxRouter) {
      ngReduxRouter.initialize();
    }

  }
}
