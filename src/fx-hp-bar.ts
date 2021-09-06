import { gameHeight, gameWidth } from './config';
import { Stuff } from './stuff';


export class HealthBar implements Stuff {
  rect!: Phaser.GameObjects.Rectangle;

  preload(_scene: Phaser.Scene) {
  }

  create(scene: Phaser.Scene) {
    this.rect = scene.add.rectangle(0, 0, gameWidth, gameHeight * 0.03);
    this.rect.setOrigin(0, 0)
    this.rect.setFillStyle(0xcc0000);
    this.rect.depth = 10;
  }

  setPercent(amount: number) {
    this.rect.displayWidth = gameWidth * amount;
  }

}