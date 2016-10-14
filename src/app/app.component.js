"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var answer_1 = require('./answer/answer');
require('../css/main.css');
var AppComponent = (function () {
    function AppComponent() {
        this.answers = [
            new answer_1.Answer("It is certain", 0),
            new answer_1.Answer("It is decidedly so", 0),
            new answer_1.Answer("Without a doubt", 0),
            new answer_1.Answer("Yes, definitely", 0),
            new answer_1.Answer("You may rely on it", 0),
            new answer_1.Answer("As I see it, yes", 0),
            new answer_1.Answer("Most likely", 0),
            new answer_1.Answer("Outlook good", 0),
            new answer_1.Answer("Yes", 0),
            new answer_1.Answer("Signs point to yes", 0),
            new answer_1.Answer("Reply hazy try again", 0),
            new answer_1.Answer("Ask again later", 0),
            new answer_1.Answer("Better not tell you now", 0),
            new answer_1.Answer("Cannot predict now", 0),
            new answer_1.Answer("Concentrate and ask again", 0),
            new answer_1.Answer("Don't count on it", 0),
            new answer_1.Answer("My reply is no", 0),
            new answer_1.Answer("My sources say no", 0),
            new answer_1.Answer("Outlook not so good", 0),
            new answer_1.Answer("Very doubtful", 0)
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('AppComponent initializing...');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <h1>This is a test header</h1>\n      <ul>\n        <li *ngFor=\"let a of answers\">\n            <answer [answer]=\"a\"></answer>\n        </li>\n      </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
