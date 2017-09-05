import { Component, Input, Output, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { dispatch, select, select$, WithSubStore } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IHero } from '../model';

@Component({
  selector: 'hero-list',
  templateUrl: './component.html',
  styleUrls: ['./component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroListComponent {

  @Input() heroes: IHero[];
  @Output() onSelect = new EventEmitter<IHero>();

  onHeroSelected(hero: IHero) {
    this.onSelect.emit(hero);
  }

}
