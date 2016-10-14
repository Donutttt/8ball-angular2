import { Component, Input } from '@angular/core';
import { EightBall } from './8ball';

@Component({
  selector: 'eightball',
  template: `
    <p>This is the eightball template</p>
    <div *ngIf="eightball">
        <ul>
          <li *ngFor="let answer of eightball.answers">{{ answer.text }}</li>
        </ul>
    </div>
  `
})
export class EightBallComponent{
    @Input() eightball: EightBall;
}
