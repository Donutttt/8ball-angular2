import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        AnswerComponent
    ],
    imports: [
        BrowserModule
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
