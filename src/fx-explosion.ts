import explosionUrl from '../assets/explosion.png';
import { gameWidth } from './config';
import { Stuff } from './stuff';

const keys = {
  sheet: "explosion-sheet",
  animBoom: "boom",
  animShield: "shield",
}

export class Explosion implements Stuff {
  sprite!: Phaser.GameObjects.Sprite;

  preload(scene: Phaser.Scene) {
    scene.load.spritesheet(
      keys.sheet,
      explosionUrl,
      {
        frameWidth: 32,
        frameHeight: 32,
        margin: 0,
        spacing: 0,
      }
    );
  }

  create(scene: Phaser.Scene) {
    scene.anims.create({
      key: keys.animBoom,
      frames: scene.anims.generateFrameNumbers(keys.sheet, { start: 0, end: 7 }),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true,
    });
    scene.anims.create({
      key: keys.animShield,
      frames: scene.anims.generateFrameNumbers(keys.sheet, { frames: [3, 6, 7] }),
      frameRate: 15,
      repeat: 0,
      hideOnComplete: true,
      // yoyo: true,
    });
    this.sprite = scene.add.sprite(100, 100, keys.animBoom);
    this.sprite.scale = 2.5 * gameWidth / 300;
    this.sprite.alpha = 0.8;
    this.sprite.setVisible(false);
    // this.rays.map(i => i.setRotation(Math.PI));
    // this.sprite.play(keys.animBoom);
    // this.rays.map(i => i.setVisible(false));
    // this.rays.map(i => i.play('rays-charging'))
  }

  shield() {
    this.sprite.setVisible(true);
    this.sprite.play(keys.animShield);
    this.sprite.setTintFill(0x1199ff);
  }

  fire() {
    this.sprite.setVisible(true);
    this.sprite.clearTint();
    this.sprite.play(keys.animBoom);
    // this.sprite.alpha = 1.0;
  }

}