import type { Player } from "./Player";

export class Upgrade {
  static upgradeDamage: (player: Player) => void = (player) => {
    player.damage += 10;
  };
  static upgradeAttackSpeed: (player: Player) => void = (player) => {
    player.attackSpeed += 10;
  };
}
