import { Component } from '@angular/core';

@Component({
    selector: 'question-input',
    template: `
        <div class="question-input wrapper">
            <input type="text" placeholder="{{ questionHint }}" />
            <button>{{ buttonText }}</button>
        </div>
    `
})
export class QuestionInput{
    questionHint: string = 'Ask a question';
    buttonText: string = 'Ask'
}
