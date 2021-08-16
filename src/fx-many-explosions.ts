import imageUrl from '../assets/explosion2.png';
import { gameHeight, gameWidth } from './config';
import { Stuff } from './stuff';
import { sleep } from './utils';

const keys = {
  sheet: "explosion2-sheet",
  animBoom: "boom2",
}

export class ManyExplosions implements Stuff {
  private sprites: Phaser.GameObjects.Sprite[] = [];

  preload(scene: Phaser.Scene) {
    scene.load.spritesheet(
      keys.sheet,
      imageUrl,
      {
        frameWidth: 80,
        frameHeight: 80,
        margin: 0,
        spacing: 0,
      }
    );
  }

  create(scene: Phaser.Scene) {
    scene.anims.create({
      key: keys.animBoom,
      frames: scene.anims.generateFrameNumbers(keys.sheet, { start: 0, end: 6 }),
      frameRate: 20,
      repeat: 2,
      hideOnComplete: true,
    });
    for (let i = 0; i < 10; i++) {
      const sprite = scene.add.sprite(0, 0, keys.animBoom);
      this.sprites.push(sprite);
      sprite.scale = 2.5 * gameWidth / 300;
      sprite.alpha = 0.8;
      sprite.x = Math.random() * gameWidth;
      sprite.y = Math.random() * gameHeight * 0.5;
      sprite.setVisible(false);
      sprite.depth = 20;
    }
  }

  async fire(): Promise<void[]> {
    const p = [];
    for (const sprite of this.sprites) {
      const prom = (async () => {
        await sleep(Math.random() * 1000);
        sprite.setVisible(true);
        sprite.play(keys.animBoom);
      })();
      p.push(prom);
    }

    return Promise.all(p);
  }

}

