import 'phaser';
import particleUrl from '../assets/particle.png';
import gaspUrl from '../assets/gasp.mp3';
import { Background } from './fx-background';
import { Stuff } from './stuff';
import { AnswerButton } from './answer-button';

export class MenuScene extends Phaser.Scene {
  private startKey!: Phaser.Input.Keyboard.Key;
  private background = new Background();
  private stuff: Stuff[] = [
    this.background,
  ];
  private buttons: AnswerButton[] = [];

  constructor() {
    super({
      key: 'MenuScene'
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
    const title = this.add.text(this.game.scale.width / 2, 60, 'Nihongo Shooter', {
      fontSize: '40px',
      fontFamily: "Helvetica",
      align: "center",
    });
    title.setOrigin(0.5);

    const maxLevel = 44;
    const columnCount = 6;
    for (let index = 0; index < maxLevel; index++) {
      const level = index + 1;
      const button = new AnswerButton(this);
      this.buttons.push(button);
      button.setText('' + (level + 1));
      button.setXY(40 + 60 * (index % columnCount), 140 + 60 * Math.floor(index / columnCount));
      button.onPress = () => {
        console.log('press', level);
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