import { Component, Input } from '@angular/core';

import { Answer } from './answer';

@Component({
    selector: 'answer',
    template: `
      <div *ngIf="answer">
        <p>{{ answer.text }}</p>
      </div>
    `
})
export class AnswerComponent{

    @Input() answer: Answer;

}
