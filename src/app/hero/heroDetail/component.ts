import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { dispatch, select, select$, WithSubStore } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { IHero } from '../model';

/**
 * Fractal component example.
 */
// @WithSubStore({
//   basePathMethodName: 'getBasePath',
//   localReducer: herComponentReducer,
// })
@Component({
  selector: 'hero-detail',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent {

  @Input() hero: IHero;

}
