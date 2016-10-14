import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import { AnswerComponent } from './answer/answer.component';
import { EightBallComponent } from './8ball/8ball.component';
import { QuestionInput } from './ui/question-input.component';

@NgModule({
    declarations: [
        AppComponent,
        AnswerComponent,
        EightBallComponent,
        QuestionInput
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
