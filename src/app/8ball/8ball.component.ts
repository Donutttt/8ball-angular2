import { Component, Input } from '@angular/core';
import { EightBall } from './8ball';

import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'eightball',
  template: `
    <div *ngIf="eightball">
        <p (click)="toggleState()">{{ eightball.currentAnswer }}</p>
    </div>
  `
})
export class EightBallComponent{
    @Input() eightball: EightBall;
    selectingState: string = 'inactive';

    toggleState(): void{
        this.selectingState = this.selectingState == 'inactive' ? 'active' : 'inactive';
    };
}
