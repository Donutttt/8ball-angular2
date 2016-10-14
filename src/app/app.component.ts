import {Component, OnInit} from '@angular/core';

import { Answer } from './answer/answer';
import { AnswerComponent } from './answer/answer.component';

import { EightBall } from './8ball/8ball';

import '../css/main.css';

@Component({
    selector: 'my-app',
    template: `
      <h1>This is a test header</h1>
      <question-input></question-input>
      <eightball [eightball]="mainEightball"></eightball>
    `
})

export class AppComponent implements OnInit {

    mainEightball: EightBall = new EightBall();

    ngOnInit() {
        console.log('AppComponent initializing...');
    }
    constructor(){
    }
}
