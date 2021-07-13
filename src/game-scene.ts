import 'phaser';
import particleUrl from '../assets/particle.png';
import shipUrl from '../assets/ship-01.png';
import shipThrustUrl from '../assets/ship-01-thrust.png';
import gaspUrl from '../assets/gasp.mp3';
import { AnswerButton } from './answer-button';
import { globalWords } from './words';


export class GameScene extends Phaser.Scene {
  private startKey!: Phaser.Input.Keyboard.Key;
  private sprites: {s: Phaser.GameObjects.Image, r: number }[] = [];
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private ship!: Phaser.GameObjects.Container;
  private buttons!: AnswerButton[];

  constructor() {
    super({
      key: 'GameScene'
    });
  }

  preload(): void {
    this.buttons = [];
    
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
    this.cursors = this.input.keyboard.createCursorKeys();

    for (const i of [0, 1, 2]) {
      const button = new AnswerButton(this);
      button.setText(globalWords[i].hiragana + '\n' + globalWords[i].kanji);
      button.setXY(50 + 100 * i, 50 + (i % 2) * 80);
      this.buttons.push(button);
    }

    this.add.text(0, 0, 'Press arrow keys to move', {
      fontSize: '20px',
      fontFamily: "Helvetica",
    });

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
    const ship = this.add.sprite(0, 0, 'ship');
    ship.play('player-idle');

    this.anims.create({
      key: "thrust-idle",
      frames: this.anims.generateFrameNumbers("ship-thrust-sheet", {frames: [0, 1]}),
      frameRate: 4,
      repeat: -1
    });
    const thrust = this.add.sprite(0, 20, 'ship-thrust');
    thrust.play('thrust-idle');

    this.ship = this.add.container(0, 0, [ship, thrust]);
    this.ship.x = this.game.scale.width / 2;
    this.ship.y = this.game.scale.height * 0.86;

  }

  update(): void {
    if (this.cursors.left.isDown) {
        this.ship.x = 0.2 * this.game.scale.width;
    }
    if (this.cursors.up.isDown) {
        this.ship.x = 0.5 * this.game.scale.width;
    }
    if (this.cursors.right.isDown) {
        this.ship.x = 0.8 * this.game.scale.width;
    }


    // if (this.startKey.isDown) {
    //   this.sound.play('gasp');
    //   this.scene.start(this);
    // }

    const debrisMaxY = this.game.scale.height + 100;
    const debrisMinY = -100
    for (let i = 0; i < this.sprites.length; i++) {
        const sprite = this.sprites[i].s;

        sprite.y += this.sprites[i].r;

        if (sprite.y > debrisMaxY)
        {
            sprite.y = debrisMinY;
        }
    }

  }
}