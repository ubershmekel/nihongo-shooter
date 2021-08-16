import raysUrl from '../assets/rays.png';
import { gameHeight } from './config';
import { Stuff } from './stuff';

export class Rays implements Stuff {
  private rays!: Phaser.GameObjects.Sprite[];
  private container!: Phaser.GameObjects.Container;

  preload(scene: Phaser.Scene) {
    scene.load.spritesheet(
      "rays-sheet",
      raysUrl,
      {
        frameWidth: 64,
        frameHeight: 224,
        margin: 0,
        spacing: 0,
      }
    );
  }

  create(scene: Phaser.Scene) {
    scene.anims.create({
      key: "rays-charging",
      frames: scene.anims.generateFrameNumbers("rays-sheet", { frames: [0, 1, 2, 3, 4] }),
      frameRate: 15,
      repeat: -1,
      // hideOnComplete: true,
    });
    scene.anims.create({
      key: "rays-fire",
      frames: scene.anims.generateFrameNumbers("rays-sheet", { frames: [4, 8, 9, 10] }),
      frameRate: 15,
      repeat: 0,
      hideOnComplete: true,
    });
    this.rays = [
      scene.add.sprite(0, 100, 'rays'),
      scene.add.sprite(0, 230, 'rays'),
      scene.add.sprite(0, 428, 'rays'),
    ];
    this.container = scene.add.container(0, 0, this.rays);
    this.container.scale = gameHeight / 600;
    this.container.setDepth(5);

    this.rays.map(i => {
      i.setRotation(Math.PI);
      i.setVisible(false);
    });
  }

  setX(x: number) {
    // this.rays.map(i => i.x = x);
    this.container.x = x;
  }

  fire() {
    this.rays.map(i => {
      i.setVisible(true);
    });
    this.rays.map(i => i.play('rays-fire'))
  }

  fireBlocked() {
    this.rays.map(i => i.setVisible(true));
    this.rays[0].setVisible(false);
    this.rays[1].setVisible(false);
    this.rays.map(i => i.play('rays-fire'))
  }
}