import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { canFlyPipe } from '../../pipes/canfly-case.pipe';
import { HeroColorPipe } from '../../pipes/heroColor.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ToggleCasePipe, canFlyPipe, HeroColorPipe],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('Nicolas');
  upperCase = signal(true);
  heroes = signal(heroes);
}
