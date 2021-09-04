import 'phaser';
import particleUrl from '../assets/particle.png';
import gaspUrl from '../assets/gasp.mp3';
import { Background } from './fx-background';
import { Stuff } from './stuff';
import { AnswerButton } from './answer-button';
import { maxLevel } from './words';
import { gameHeight, gameWidth } from './config';
import { storage } from './storage';
import { GameSceneProps } from './game-scene';
import { addText } from './utils';

export const menuSceneKey = 'MenuScene';

export class MenuScene extends Phaser.Scene {
  private isHintOn = true;
  private startKey!: Phaser.Input.Keyboard.Key;
  private background = new Background();
  private stuff: Stuff[] = [
    this.background,
  ];
  private buttons!: AnswerButton[];
  private hintToggle!: AnswerButton;

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

  updateHintToggle() {
    if (this.isHintOn) {
      this.hintToggle.setText("Hiragana is on");
    } else {
      this.hintToggle.setText("Hiragana is off");
    }
  }

  create(): void {
    this.buttons = [];

    this.hintToggle = new AnswerButton(this);
    this.hintToggle.setXY(gameWidth / 2, gameHeight * 0.95);
    this.updateHintToggle();
    this.hintToggle.onPress = () => {
      this.isHintOn = !this.isHintOn;
      this.updateHintToggle();
    };

    this.stuff.map(thing => thing.create(this));
    const title = addText(this, gameWidth / 2, gameHeight / 20, 'Nihongo Shooter');
    title.setFontSize(0.05 * gameHeight);
    title.setAlign("center");
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
      const y = (1.4 + 1 * Math.floor(index / columnCount)) * gameHeight / 10;
      button.setXY(x, y);
      button.onPress = () => {
        this.sound.play('gasp');
        const sceneInfo: GameSceneProps = {
          level,
          showHint: this.isHintOn,
        };
        this.scene.start("GameScene", sceneInfo);
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