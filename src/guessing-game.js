class GuessingGame {

    constructor() {
        this.min = null;
        this.max = null;
        this.candidate = null;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        // let candidate = (Math.round((this.max - this.min) / 2) + this.min);
        this.candidate = Math.round((this.max + this.min) / 2);
        return this.candidate;
    }

    lower() {
        this.max = this.candidate;
    }

    greater() {
        this.min = this.candidate;
    }
}

module.exports = GuessingGame;
