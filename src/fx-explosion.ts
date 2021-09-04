import explosionUrl from '../assets/explosion.png';
import { gameHeight, gameWidth } from './config';
import { Stuff } from './stuff';
import { addText, tweenPromise } from './utils';

const keys = {
  sheet: "explosion-sheet",
  animBoom: "boom",
  animShield: "shield",
}

export class Explosion implements Stuff {
  private sprite!: Phaser.GameObjects.Sprite;
  private text!: Phaser.GameObjects.Text;
  private scene!: Phaser.Scene;

  preload(scene: Phaser.Scene) {
    this.scene = scene;
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
    this.sprite.depth = 20;

    this.text = addText(scene, 0, 0, "違");
    this.text.setFontSize(gameHeight * 0.12);
    this.text.setAlign('center');
    this.text.setOrigin(0.5);
    this.text.setColor('#6666ff');
    this.text.depth = 20;
    this.text.setVisible(false);
  }

  shield() {
    // this.sprite.setVisible(true);
    // this.sprite.play(keys.animShield);
    // this.sprite.setTintFill(0x1199ff);
    this.text.setVisible(true);
    this.text.scale = 1.0;
    this.text.alpha = 1.0;
    tweenPromise(this.scene, {
      targets: this.text,
      scale: 2.0,
      alpha: 0,
      // ease: 'Linear',
      duration: 300,
    });
  }

  fire() {
    this.sprite.setVisible(true);
    this.sprite.clearTint();
    this.sprite.play(keys.animBoom);
    // this.sprite.alpha = 1.0;
  }

  setXY(x: number, y: number) {
    this.sprite.x = x;
    this.sprite.y = y;
    this.text.x = x;
    this.text.y = y;
  }

}

