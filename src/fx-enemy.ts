import imageUrl from '../assets/enemies.png';
import { gameHeight, gameWidth } from './config';
import { Stuff } from './stuff';
import { tweenPromise } from './utils';

const keys = {
  sheet: "enemies-sheet",
  animGreen: "agreen",
  animBlue: "ablue",
  animRed: "ared",
}

export class Enemy implements Stuff {
  private sprite!: Phaser.GameObjects.Sprite;

  preload(scene: Phaser.Scene) {
    scene.load.spritesheet(
      keys.sheet,
      imageUrl,
      {
        frameWidth: 48,
        frameHeight: 48,
        margin: 0,
        spacing: 0,
      }
    );
  }

  create(scene: Phaser.Scene) {
    scene.anims.create({
      key: keys.animGreen,
      frames: scene.anims.generateFrameNumbers(keys.sheet, { start: 0, end: 4 }),
      frameRate: 1,
      repeat: -1,
    });
    scene.anims.create({
      key: keys.animBlue,
      frames: scene.anims.generateFrameNumbers(keys.sheet, { start: 5, end: 8 }),
      frameRate: 1,
      repeat: -1,
    });
    scene.anims.create({
      key: keys.animRed,
      frames: scene.anims.generateFrameNumbers(keys.sheet, { start: 10, end: 13 }),
      frameRate: 1,
      repeat: -1,
    });
    this.sprite = scene.add.sprite(300, 300, keys.animGreen);
    this.sprite.scale = 2.0 * gameWidth / 100;
    this.sprite.play(keys.animGreen);
    this.sprite.depth = 1;

    tweenPromise(scene, {
      targets: this.sprite,
      x: '+=' + (gameWidth / 2),
      // ease: 'Linear',
      duration: 8000,
      repeat: -1,
      yoyo: true,
    });
    tweenPromise(scene, {
      targets: this.sprite,
      y: '+=' + (gameHeight * 0.1),
      // ease: 'Linear',
      duration: 4500,
      repeat: -1,
      yoyo: true,
    });
  }

  chooseEnemy(index: number) {
    const options = [keys.animGreen, keys.animBlue, keys.animRed];
    this.sprite.play(options[index % options.length]);
  }

  setXY(x: number, y: number) {
    this.sprite.x = x;
    this.sprite.y = y;
  }

}
