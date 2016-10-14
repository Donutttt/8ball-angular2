import { Answer } from './../answer/answer';

export class EightBall{

    answers: [Answer] = [
        new Answer("It is certain", 1),
        new Answer("It is decidedly so", 1),
        new Answer("Without a doubt", 1),
        new Answer("Yes, definitely", 1),
        new Answer("You may rely on it", 1),
        new Answer("As I see it, yes", 1),
        new Answer("Most likely", 1),
        new Answer("Outlook good", 1),
        new Answer("Yes", 1),
        new Answer("Signs point to yes", 1),
        new Answer("Reply hazy try again", 0),
        new Answer("Ask again later", 0),
        new Answer("Better not tell you now", 0),
        new Answer("Cannot predict now", 0),
        new Answer("Concentrate and ask again", 0),
        new Answer("Don't count on it", -1),
        new Answer("My reply is no", -1),
        new Answer("My sources say no", -1),
        new Answer("Outlook not so good", -1),
        new Answer("Very doubtful", -1)
    ];

    currentAnswer: string = '';

    getRandomAnswer(): string{
        return this.answers[Math.floor(this.answers.length * Math.random())].text;
    };

    setNewAnswer(): void{
        this.currentAnswer = this.getRandomAnswer();
    };


}
