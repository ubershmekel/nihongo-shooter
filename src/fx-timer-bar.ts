import { gameHeight, gameWidth } from './config';
import { Stuff } from './stuff';


export class TimerBar implements Stuff {
  rect!: Phaser.GameObjects.Rectangle;

  preload(_scene: Phaser.Scene) {
  }

  create(scene: Phaser.Scene) {
    this.rect = scene.add.rectangle(gameWidth * 0.0, gameHeight * 0.0, gameWidth * 0.03, gameHeight);
    this.rect.setOrigin(0, 0)
    this.rect.setFillStyle(0x5555ee);
    this.rect.depth = 9;
  }

  setPercent(amount: number) {
    this.rect.displayHeight = gameHeight * amount;
  }

}