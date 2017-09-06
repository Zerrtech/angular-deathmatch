import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { dispatch, select, select$, WithSubStore } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IHero } from '../model';

@Component({
  selector: 'hero-list-item',
  templateUrl: './index.html',
  styleUrls: ['./index.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroListItemComponent {

  @Input() hero: IHero;
  @Output() onSelect = new EventEmitter<IHero>();

  onClick(event: Event, hero: IHero) {
    console.log('clicked hero:', hero);
    this.onSelect.next(hero);
  }

}
