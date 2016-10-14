import {Component, OnInit} from '@angular/core';

import { Answer } from './answer/answer';
import { AnswerComponent } from './answer/answer.component';

import { EightBall } from './8ball/8ball';

import '../css/main.css';

@Component({
    selector: 'my-app',
    template: `
      <h1>The magic 8 ball</h1>
      <question-input [callback]="boundQuestionCallback"></question-input>
      <eightball [eightball]="mainEightball"></eightball>
    `
})

export class AppComponent implements OnInit {

    mainEightball: EightBall = new EightBall();

    boundQuestionCallback: Function;

    questionCallback(text?: string){
        this.mainEightball.setNewAnswer();
        console.log(this.mainEightball.currentAnswer);
    };

    getRandomAnswer(): string{
        return this.mainEightball.getRandomAnswer();
    };

    ngOnInit() {
        console.log('AppComponent initializing...');
        this.boundQuestionCallback = this.questionCallback.bind(this);
    }
    constructor(){
    }
}
