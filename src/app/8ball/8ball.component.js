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
var _8ball_1 = require('./8ball');
var EightBallComponent = (function () {
    function EightBallComponent() {
        this.selectingState = 'inactive';
    }
    EightBallComponent.prototype.toggleState = function () {
        this.selectingState = this.selectingState == 'inactive' ? 'active' : 'inactive';
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', _8ball_1.EightBall)
    ], EightBallComponent.prototype, "eightball", void 0);
    EightBallComponent = __decorate([
        core_1.Component({
            selector: 'eightball',
            template: "\n    <div *ngIf=\"eightball\">\n        <p (click)=\"toggleState()\">{{ eightball.currentAnswer }}</p>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EightBallComponent);
    return EightBallComponent;
}());
exports.EightBallComponent = EightBallComponent;
