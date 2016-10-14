import { Component, Input } from '@angular/core';

@Component({
    selector: 'question-input',
    template: `
        <div class="question-input wrapper">
            <input (ngModel)="questionText" type="text" placeholder="{{ questionHint }}" />
            <button  (click)="callback(questionText)" >{{ buttonText }}</button>
        </div>
    `
})
export class QuestionInput{
    @Input() callback: Function = ()=>true;

    questionText: string = '';

    questionHint: string = 'Ask a question';
    buttonText: string = 'Ask'
}
