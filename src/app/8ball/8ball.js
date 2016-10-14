"use strict";
var answer_1 = require('./../answer/answer');
var EightBall = (function () {
    function EightBall() {
        this.answers = [
            new answer_1.Answer("It is certain", 1),
            new answer_1.Answer("It is decidedly so", 1),
            new answer_1.Answer("Without a doubt", 1),
            new answer_1.Answer("Yes, definitely", 1),
            new answer_1.Answer("You may rely on it", 1),
            new answer_1.Answer("As I see it, yes", 1),
            new answer_1.Answer("Most likely", 1),
            new answer_1.Answer("Outlook good", 1),
            new answer_1.Answer("Yes", 1),
            new answer_1.Answer("Signs point to yes", 1),
            new answer_1.Answer("Reply hazy try again", 0),
            new answer_1.Answer("Ask again later", 0),
            new answer_1.Answer("Better not tell you now", 0),
            new answer_1.Answer("Cannot predict now", 0),
            new answer_1.Answer("Concentrate and ask again", 0),
            new answer_1.Answer("Don't count on it", -1),
            new answer_1.Answer("My reply is no", -1),
            new answer_1.Answer("My sources say no", -1),
            new answer_1.Answer("Outlook not so good", -1),
            new answer_1.Answer("Very doubtful", -1)
        ];
    }
    return EightBall;
}());
exports.EightBall = EightBall;
