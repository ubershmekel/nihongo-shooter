import 'phaser';
import particleUrl from '../assets/particle.png';
import gaspUrl from '../assets/gasp.mp3';
import { Background } from './fx-background';
import { Stuff } from './stuff';
import { AnswerButton } from './answer-button';
import { maxLevel } from './words';
import { gameHeight, gameWidth } from './config';
import { storage } from './storage';

export const menuSceneKey = 'MenuScene';

export class MenuScene extends Phaser.Scene {
  private startKey!: Phaser.Input.Keyboard.Key;
  private background = new Background();
  private stuff: Stuff[] = [
    this.background,
  ];
  private buttons: AnswerButton[] = [];

  constructor() {
    super({
      key: menuSceneKey,
    });
  }

  preload(): void {
    this.stuff.map(thing => thing.preload(this));
    this.startKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.S,
    );
    this.startKey.isDown = false;
    this.load.image('particle', particleUrl);
    this.load.audio('gasp', gaspUrl);
  }

  create(): void {
    this.stuff.map(thing => thing.create(this));
    const title = this.add.text(gameWidth / 2, gameHeight / 30, 'Nihongo Shooter', {
      fontSize: (0.05 * gameHeight) + 'px',
      fontFamily: "Helvetica",
      align: "center",
    });
    title.setOrigin(0.5);

    const columnCount = 6;
    for (let index = 0; index < maxLevel; index++) {
      const level = index + 1;
      const button = new AnswerButton(this);
      button.width = gameWidth * 0.115;
      if (storage.bestSpeed.get(level)) {
        button.setRestColor(0x99dd99);
      }

      this.buttons.push(button);
      button.setText('' + level);
      const x = (1.5 + 1.4 * (index % columnCount)) * gameWidth / 10;
      const y = (1.5 + 1 * Math.floor(index / columnCount)) * gameHeight / 10;
      button.setXY(x, y);
      button.onPress = () => {
        this.sound.play('gasp');
        this.scene.start("GameScene", { level });
      };
    }
  }

  update(): void {
    this.stuff.map(thing => {
      if (thing.update) thing.update(this)
    });
    if (this.startKey.isDown) {
    }

  }
}