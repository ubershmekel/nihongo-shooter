import imageUrl from '../assets/planets.png';
import { gameWidth } from './config';
import { Stuff } from './stuff';
import { tweenPromise } from './utils';

const keys = {
  sheet: "planets-sheet",
}

export class Planet implements Stuff {
  private sprite!: Phaser.GameObjects.Image;

  preload(scene: Phaser.Scene) {
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

  create(scene: Phaser.Scene) {
    this.sprite = scene.add.image(gameWidth / 2, 0, keys.sheet);
    const frameCount = this.sprite.texture.frameTotal;
    this.sprite.setFrame(Math.floor(Math.random() * frameCount));
    this.sprite.scale = 0.8 * gameWidth / 100;
    this.sprite.angle = Math.random() * 180;
    this.sprite.y = -this.sprite.displayHeight / 2;
  }

  update(_: Phaser.Scene) {
    this.sprite.angle += 0.03;
  }

  reveal(scene: Phaser.Scene) {
    const targetY = -0.3 * this.sprite.displayHeight;
    tweenPromise(scene, {
      targets: this.sprite,
      y: targetY,
      ease: 'Linear',
      // ease: Phaser.Math.Easing.Expo.Out,
      duration: 4000,
      repeat: -1,
    });
  }
}