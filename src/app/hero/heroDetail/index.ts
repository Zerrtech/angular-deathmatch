import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { dispatch, select, select$, WithSubStore } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IHero } from '../model';

@Component({
  selector: 'hero-detail',
  templateUrl: './index.html',
  styleUrls: ['./index.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDetailComponent {

  @Input() hero: IHero;
  @Output() onClose = new EventEmitter();

  onClickClose() {
    this.onClose.emit(true);
  }

}
