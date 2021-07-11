import 'phaser';
import particleUrl from '../assets/particle.png';
import shipUrl from '../assets/ship-01.png';
import shipThrustUrl from '../assets/ship-01-thrust.png';
import gaspUrl from '../assets/gasp.mp3';
import { test } from './words';


export class GameScene extends Phaser.Scene {
  private startKey!: Phaser.Input.Keyboard.Key;
  private sprites: {s: Phaser.GameObjects.Image, r: number }[] = [];

  constructor() {
    super({
      key: 'GameScene'
    });
  }

  preload(): void {
    test();
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S,
    );
    this.startKey.isDown = false;
    this.load.image('particle', particleUrl);
    // this.load.image('ship', shipUrl);
    // this.load.image('ship-thrust', shipThrustUrl);
    this.load.spritesheet(
      "ship-sheet",
      shipUrl,
      {
        frameWidth: 48,
        frameHeight: 48,
        margin: 0,
        spacing: 0,
      }
    );
    this.load.spritesheet(
      "ship-thrust-sheet",
      shipThrustUrl,
      {
        frameWidth: 16,
        frameHeight: 10,
        margin: 0,
        spacing: 0,
      }
    );

    this.load.audio('gasp', gaspUrl);
  }

  create(): void {
    this.add.text(0, 0, 'Press S to restart scene', {
      fontSize: '60px',
      fontFamily: "Helvetica",
    });

    this.add.image(100, 100, 'particle');

    for (let i = 0; i < 10; i++) {
        const x = Phaser.Math.Between(-64, 800);
        const y = Phaser.Math.Between(-64, 600);

        const image = this.add.image(x, y, 'particle');
        image.setBlendMode(Phaser.BlendModes.ADD);
        this.sprites.push({ s: image, r: 2 + Math.random() * 6 });
    }

    this.anims.create({
      key: "player-idle",
      frames: this.anims.generateFrameNumbers("ship-sheet", {frames: [0, 1, 0, 3, 4, 0]}),
      frameRate: 5,
      repeat: -1
    });
    const ship = this.add.sprite(100, 100, 'ship');
    ship.play('player-idle');

    this.anims.create({
      key: "thrust-idle",
      frames: this.anims.generateFrameNumbers("ship-thrust-sheet", {frames: [0, 1]}),
      frameRate: 4,
      repeat: -1
    });
    const thrust = this.add.sprite(100, 120, 'ship-thrust');
    thrust.play('thrust-idle');
  }

  update(): void {
    if (this.startKey.isDown) {
      this.sound.play('gasp');
      this.scene.start(this);
    }

    for (let i = 0; i < this.sprites.length; i++) {
        const sprite = this.sprites[i].s;

        sprite.y -= this.sprites[i].r;

        if (sprite.y < -256)
        {
            sprite.y = 700;
        }
    }

  }
}