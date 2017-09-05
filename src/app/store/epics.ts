import { Injectable } from '@angular/core';

import { HeroAPIEpics } from '../hero/api/epics';

@Injectable()
export class RootEpics {
  constructor(private heroEpics: HeroAPIEpics) {}

  public createEpics() {
    return [
      this.heroEpics.createEpic()
    ];
  }
}
