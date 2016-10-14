import {Component, OnInit} from '@angular/core';

import { Answer } from './answer/answer';
import { AnswerComponent } from './answer/answer.component';

import '../css/main.css';

@Component({
    selector: 'my-app',
    template: `
      <h1>This is a test header</h1>
      <ul>
        <li *ngFor="let a of answers">
            <answer [answer]="a"></answer>
        </li>
      </ul>
    `
})

export class AppComponent implements OnInit {

    answers: [Answer] = [
        new Answer("It is certain", 0),
        new Answer("It is decidedly so", 0),
        new Answer("Without a doubt", 0),
        new Answer("Yes, definitely", 0),
        new Answer("You may rely on it", 0),
        new Answer("As I see it, yes", 0),
        new Answer("Most likely", 0),
        new Answer("Outlook good", 0),
        new Answer("Yes", 0),
        new Answer("Signs point to yes", 0),
        new Answer("Reply hazy try again", 0),
        new Answer("Ask again later", 0),
        new Answer("Better not tell you now", 0),
        new Answer("Cannot predict now", 0),
        new Answer("Concentrate and ask again", 0),
        new Answer("Don't count on it", 0),
        new Answer("My reply is no", 0),
        new Answer("My sources say no", 0),
        new Answer("Outlook not so good", 0),
        new Answer("Very doubtful", 0)
    ];

    ngOnInit() {
        console.log('AppComponent initializing...');
    }
    constructor(){
    }
}
