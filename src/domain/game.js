class Bet {

    constructor(amount, score) {
        this.score = score;
        this.amount = amount;
    }

    score() {
        return this.score
    }

    amount() {
        return this.amount
    }

}

class RollDiceGame {
    #bets;

    addBet(player, bet) {
        this.#bets[player] = bet;
    }

    play() {
        const winningScore = Math.floor(Math.random() * 6) + 1

        this.#bets.keys.forEach((player) => {
            if (this.#bets[player].score() === winningScore) {
                player.win(this.#bets[player].amount() * 6)
            } else {
                this.#bets[player].lose()
            }
        })
    }

    leave(player) {
        delete (this.#bets[player]);
    }
}

module.exports = { RollDiceGame }