import imageUrl from '../assets/ui.png';
import { gameWidth } from './config';
import { Stuff } from './stuff';

const keys = {
  sheet: "ui-sheet",
}

export const uiNameToFrame = {
  back: 0,
  zeroStar: 1,
  oneStar: 2,
  twoStar: 3,
}

export class UI implements Stuff {
  scene!: Phaser.Scene;
  preload(scene: Phaser.Scene) {
    this.scene = scene;
    scene.load.spritesheet(
      keys.sheet,
      imageUrl,
      {
        frameWidth: 200,
        frameHeight: 200,
        margin: 0,
        spacing: 0,
      }
    );
  }

  create(_: Phaser.Scene) {
  }

  update(_: Phaser.Scene) {
  }

  sprite(frameId: number) {
    const sprite = this.scene.add.sprite(0, 0, keys.sheet)
    sprite.setFrame(frameId);
    sprite.width = gameWidth * 0.115;
    return sprite
  }
}