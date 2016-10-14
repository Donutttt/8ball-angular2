"use strict";
var Answer = (function () {
    function Answer(textIn, levelOfGoodness, selectedIn) {
        if (textIn === void 0) { textIn = ''; }
        if (levelOfGoodness === void 0) { levelOfGoodness = 0; }
        this.selected = false;
        this.text = textIn;
        this.levelOfGoodness = levelOfGoodness;
        if (selectedIn !== undefined) {
            this.selected = selectedIn;
        }
    }
    return Answer;
}());
exports.Answer = Answer;
