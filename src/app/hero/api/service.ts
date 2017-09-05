import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IHero, fromServer } from '../model';

// The heroes API we created.
const URL = 'https://angular-1-training-class-api.herokuapp.com/heroes';

@Injectable()
export class HeroAPIService {
  constructor(private http: Http) {}

  getAll = (): Observable<IHero[]> =>
    this.http.get(URL)
      .map(resp => resp.json())
      .map(records => records.map(fromServer));
}
