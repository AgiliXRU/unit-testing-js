class Player {
    #game = null
    #chips

    activeGame() {
        return this.#game;
    }

    getAvailableChips() {
        return this.#chips;
    }

    isInGame() {
        return this.#game !== null;
    }

    buy(amount) {
        if (amount <0) {
            throw new Error("can not bet more than chips available")
        }

        this.#chips = amount;
    }

    joins(game) {
        if(this.isInGame()) {
            throw new Error("player must leave the current game before joining another game")
        }

        this.#game = game;
    }

    bet(bet) {
        if(this.#chips < bet.amount()) {
            throw new Error("can not bet more than chips available")
        }
    }

    win(chips) {
        this.#chips += chips
    }

    lose() {

    }
}

module.exports = { Player }