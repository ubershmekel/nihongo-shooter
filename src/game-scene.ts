import 'phaser';
import shipUrl from '../assets/ship-01.png';
import shipThrustUrl from '../assets/ship-01-thrust.png';
import gaspUrl from '../assets/gasp.mp3';
import { AnswerButton } from './answer-button';
import { WordGame } from './words';
import { Rays } from './rays';
import { Explosion } from './fx-explosion';
import { Background } from './fx-background';
import { Stuff } from './stuff';
import { LevelDoneData, levelDoneSceneKey } from './level-done-scene';
import { gameHeight, gameWidth } from './config';
import { HealthBar } from './fx-hp-bar';
import { Enemy } from './fx-enemy';
import { ManyExplosions } from './fx-many-explosions';

const gameSceneKey = 'GameScene';

export interface GameSceneProps {
  level: number,
  showHint: boolean,
}

const { LEFT, RIGHT, UP, DOWN, ONE, TWO, THREE } = Phaser.Input.Keyboard.KeyCodes;
const keyCodes = {
  left: LEFT,
  right: RIGHT,
  up: UP,
  down: DOWN,
  one: ONE,
  two: TWO,
  three: THREE,
};
type KeysType = { [name in keyof typeof keyCodes]: Phaser.Input.Keyboard.Key };

export class GameScene extends Phaser.Scene {
  private level!: number;
  private startTime!: number;
  private showHint!: boolean;

  private ship!: Phaser.GameObjects.Container;
  private buttons!: AnswerButton[];
  private definitionBox!: AnswerButton;
  private wordsGame!: WordGame;
  private scoreText!: Phaser.GameObjects.Text;
  private rays = new Rays();
  private explosion = new Explosion();
  private manyExplosions = new ManyExplosions();
  private background = new Background();
  private hpBar = new HealthBar();
  private enemy = new Enemy();
  private stuff: Stuff[] = [
    this.rays,
    this.explosion,
    this.background,
    this.hpBar,
    this.enemy,
    this.manyExplosions,
  ];
  private isGameOver = false;
  private keys!: KeysType;

  constructor() {
    super({
      key: gameSceneKey,
    });
  }

  init(props: any) {
    this.level = props.level;
    if (!props.level) {
      this.level = 1;
    }
    this.showHint = props.showHint;
    if (props.showHint === undefined) {
      this.showHint = true;
    }
    this.startTime = Date.now();
  }

  preload(): void {
    console.log('level', this.level);
    this.stuff.map(thing => thing.preload(this));

    this.wordsGame = new WordGame(this.level);
    this.buttons = [];
    this.isGameOver = false;

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
    this.stuff.map(thing => thing.create(this));

    for (const _ of this.wordsGame.buttonWords) {
      const button = new AnswerButton(this);
      this.buttons.push(button);
    }

    this.definitionBox = new AnswerButton(this);
    this.definitionBox.setXY(this.game.scale.width / 2, 0.3 * this.game.scale.height);

    this.scoreText = this.add.text(0, 0, 'HP: 100', {
      fontSize: (3 * gameHeight / 100) + 'px',
      fontFamily: "Helvetica",
    });
    this.scoreText.depth = 11;
    this.enemy.chooseEnemy(this.level);

    this.updateWordButtons();

    this.anims.create({
      key: "player-idle",
      frames: this.anims.generateFrameNumbers("ship-sheet", { frames: [0, 1, 0, 3, 4, 0] }),
      frameRate: 5,
      repeat: -1
    });
    const ship = this.add.sprite(0, 0, 'ship');
    ship.play('player-idle');

    this.anims.create({
      key: "thrust-idle",
      frames: this.anims.generateFrameNumbers("ship-thrust-sheet", { frames: [0, 1] }),
      frameRate: 4,
      repeat: -1
    });
    const thrust = this.add.sprite(0, 20, 'ship-thrust');
    thrust.play('thrust-idle');

    this.ship = this.add.container(0, 0, [ship, thrust]);
    this.ship.x = gameWidth / 2;
    this.ship.y = gameHeight * 0.86;
    this.ship.scale = gameHeight / 600;

    this.keys = this.input.keyboard.addKeys(keyCodes) as KeysType;
  }

  update(): void {
    if (this.isGameOver) {
      return;
    }
    this.stuff.map(thing => {
      if (thing.update) thing.update(this)
    });

    if (Phaser.Input.Keyboard.JustDown(this.keys.left) || Phaser.Input.Keyboard.JustDown(this.keys.one)) {
      this.guessAnswer(0);
    }
    if (Phaser.Input.Keyboard.JustDown(this.keys.down) || Phaser.Input.Keyboard.JustDown(this.keys.up) || Phaser.Input.Keyboard.JustDown(this.keys.two)) {
      this.guessAnswer(1);
    }
    if (Phaser.Input.Keyboard.JustDown(this.keys.right) || Phaser.Input.Keyboard.JustDown(this.keys.three)) {
      this.guessAnswer(2);
    }

  }

  enemyX(index: number) {
    const wi = this.game.scale.width;
    const enemies = [wi * 0.25, wi * 0.5, wi * 0.75];
    return enemies[index];
  }

  enemyY(index: number) {
    // one up, one down
    return (57 + (index % 2) * 14) * gameHeight / 100;
  }

  async guessAnswer(index: number) {
    if (this.isGameOver) {
      return;
    }
    const result = this.wordsGame.tryAnswer(index);

    this.ship.setX(this.enemyX(index))
    this.rays.setX(this.enemyX(index));
    this.explosion.setXY(this.enemyX(index), this.enemyY(index));

    if (result.success) {
      this.rays.fire();
      this.explosion.fire();
    } else {
      this.rays.fireBlocked();
      this.explosion.shield();
    }

    if (result.gameOver) {
      this.isGameOver = true;
      const endTime = Date.now();
      const durationSeconds = (endTime - this.startTime) / 1000.0;
      const data: LevelDoneData = {
        duration: durationSeconds,
        mistakes: this.wordsGame.mistakes,
        corrects: this.wordsGame.corrects,
        level: this.level,
      };
      console.log("level over", data);
      try {
        await this.manyExplosions.fire();
      } catch (err) {
        console.warn("strange error", err);
        // I don't know how to avoid the 
        // "Uncaught (in promise) TypeError: Cannot read property 'play' of undefined"
        // when I mash buttons on the second go
      }
      this.scene.start(levelDoneSceneKey, data);
    } else {
      this.updateWordButtons();
    }
  }

  updateWordButtons() {
    for (const [index, word] of this.wordsGame.buttonWords.entries()) {
      const button = this.buttons[index];
      let buttonText = word.kanji;
      if (this.showHint || !buttonText) {
        buttonText += '\n' + word.hiragana
      }
      button.setText(buttonText.trim());
      button.setXY(this.enemyX(index), this.enemyY(index));
      button.onPress = () => {
        console.log('press', index, word.id);
        this.guessAnswer(index);
      }
    }

    const answerWord = this.wordsGame.getAnswerWord();
    this.definitionBox.setText(answerWord.english);

    const percentLeft = 100 * this.wordsGame.remainingWords() / this.wordsGame.totalWords();
    this.hpBar.setPercent(percentLeft);
    this.scoreText.setText("HP: " + this.wordsGame.remainingWords() * 10);
  }
}