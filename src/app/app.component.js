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
var _8ball_1 = require('./8ball/8ball');
require('../css/main.css');
var AppComponent = (function () {
    function AppComponent() {
        this.mainEightball = new _8ball_1.EightBall();
    }
    AppComponent.prototype.questionCallback = function (text) {
        this.mainEightball.setNewAnswer();
        console.log(this.mainEightball.currentAnswer);
    };
    ;
    AppComponent.prototype.getRandomAnswer = function () {
        return this.mainEightball.getRandomAnswer();
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        console.log('AppComponent initializing...');
        this.boundQuestionCallback = this.questionCallback.bind(this);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <h1>The magic 8 ball</h1>\n      <question-input [callback]=\"boundQuestionCallback\"></question-input>\n      <eightball [eightball]=\"mainEightball\"></eightball>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
