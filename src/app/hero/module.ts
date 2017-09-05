import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { CoreModule } from '../core/module';
//import { AnimalListComponent } from './animal-list/component';
import { HeroAPIActions } from './api/actions';
import { HeroAPIEpics } from './api/epics';
import { HeroAPIService } from './api/service';
import { StoreModule } from '../store/module';
import { HeroListComponent } from './heroList/component';
import { HeroListItemComponent } from './heroListItem/component';
import { HeroListContainerComponent } from './heroListContainer/component';
import { HeroDetailComponent } from './heroDetail/component';
import { HeroDetailContainerComponent } from './heroDetailContainer/component';

@NgModule({
  declarations: [HeroListContainerComponent, HeroListComponent, HeroListItemComponent, HeroDetailContainerComponent, HeroDetailComponent],
  exports: [HeroListContainerComponent, HeroListComponent, HeroDetailContainerComponent],
  imports: [StoreModule, CommonModule],
  providers: [HeroAPIActions, HeroAPIEpics, HeroAPIService],
})
export class HeroModule {}
