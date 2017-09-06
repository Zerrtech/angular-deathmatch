import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeroAPIActions } from './api/actions';
import { HeroAPIEpics } from './api/epics';
import { HeroAPIService } from './api/service';
import { StoreModule } from '../store/module';
import { HeroListComponent } from './heroList';
import { HeroListItemComponent } from './heroListItem';
import { HeroListContainerComponent } from './heroListContainer';
import { HeroDetailComponent } from './heroDetail';
import { HeroDetailContainerComponent } from './heroDetailContainer';
import { HeroRoutes } from './routing';


@NgModule({
  declarations: [
    HeroListContainerComponent,
    HeroListComponent,
    HeroListItemComponent,
    HeroDetailContainerComponent,
    HeroDetailComponent
  ],
  exports: [
    RouterModule,
    HeroListContainerComponent,
    HeroDetailContainerComponent
  ],
  imports: [
    RouterModule.forRoot(HeroRoutes),
    StoreModule,
    CommonModule
  ],
  providers: [
    HeroAPIActions,
    HeroAPIEpics,
    HeroAPIService
  ],
})
export class HeroModule {}
