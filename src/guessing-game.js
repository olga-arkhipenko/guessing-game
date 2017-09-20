class GuessingGame {

    constructor() {
        this.min = null;
        this.max = null;
        this.curVal = null;

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;

    }

    guess() {
        this.curVal =  Math.ceil((this.max-this.min)/2 + this.min);
        return this.curVal;
    }

    lower() {
        this.max = this.curVal;
    }

    greater() {
        this.min = this.curVal;
    }
}

module.exports = GuessingGame;
