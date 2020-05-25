import { Player } from "../src/domain/player";
import { Game } from "../src/domain/game";

describe("Roll Dice game", () => {
  test("new player can join game", () => {
    const game = new Game();
    const player = new Player();

    player.joins(game);

    expect(player.isInGame()).toBeTruthy();
  });
  test("player can join only one game", () => {
    const game = new Game();
    const anotherGame = new Game();
    const player = new Player();
    player.joins(game);

    const joinAnotherGame = () => player.joins(anotherGame);

    expect(joinAnotherGame).toThrow();
  });
  test("player joined the game can by cheaps", () => {
    const game = new Game();
    const player = new Player();
    player.joins(game);

    player.buy(42);

    expect(player.getAvailableChips()).toBe(42);
  });
});
