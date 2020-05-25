import { Player } from "./player";

export class Bet {
  _score: number;
  _amount: number;

  constructor(amount: number, score: number) {
    this._score = score;
    this._amount = amount;
  }

  score(): number {
    return this._score;
  }

  amount(): number {
    return this._amount;
  }
}

export class Game {
  #bets: { player: Player; bet: Bet }[];

  addBet(player, bet) {
    this.#bets[player] = bet;
  }

  play() {
    const winningScore = Math.floor(Math.random() * 6) + 1;

    this.#bets.forEach((item) => {
      const { player, bet } = item;
      if (bet.score() === winningScore) {
        player.win(bet.amount() * 6);
      } else {
        player.lose();
      }
    });
  }

  leave(player) {
    delete this.#bets[player];
  }
}
