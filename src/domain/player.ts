import { Game, Bet } from "./game";

export class Player {
  #game: Game | null = null;
  #chips: number;

  activeGame(): Game {
    return this.#game;
  }

  getAvailableChips(): number {
    return this.#chips;
  }

  isInGame(): boolean {
    return this.#game !== null;
  }

  buy(amount: number): void {
    if (amount < 0) {
      throw new Error("can not bet more than chips available");
    }

    this.#chips = amount;
  }

  joins(game: Game): void {
    if (this.isInGame()) {
      throw new Error(
        "player must leave the current game before joining another game"
      );
    }

    this.#game = game;
  }

  bet(bet: Bet): void {
    if (this.#chips < bet.amount()) {
      throw new Error("can not bet more than chips available");
    }
  }

  win(chips: number): void {
    this.#chips += chips;
  }

  lose() {}
}
