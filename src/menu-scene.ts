import 'phaser';
import particleUrl from '../assets/particle.png';
import backButtonUrl from '../assets/back.png';
import gaspUrl from '../assets/gasp.mp3';
import { Background } from './fx-background';
import { Stuff } from './stuff';
import { AnswerButton } from './answer-button';
import { LanguageType, maxLevel } from './words';
import { gameHeight, gameWidth } from './config';
import { storage } from './storage';
import { gameSceneKey, GameSceneProps } from './game-scene';
import { addText } from './utils';
import { ImageButton } from './image-button';
import { languageSelectSceneKey } from './language-select-scene';
import { UI, uiNameToFrame } from './fx-ui';
import { whichStarFrame } from './scoring';

export const menuSceneKey = 'MenuScene';

export interface MenuSceneProps {
  language: LanguageType,
}

export class MenuScene extends Phaser.Scene {
  private isHintOn = true;
  private startKey!: Phaser.Input.Keyboard.Key;
  private background = new Background();
  private backButton = new ImageButton('back-button', backButtonUrl);
  private ui = new UI();
  private stuff: Stuff[] = [
    this.background,
    this.backButton,
    this.ui,
  ];
  private buttons!: AnswerButton[];
  private hintToggle!: AnswerButton;
  private language!: LanguageType;

  constructor() {
    super({
      key: menuSceneKey,
    });
  }

  init(props: MenuSceneProps) {
    this.language = props.language;
    if (!this.language) {
      this.language = storage.defaultLanguage.get() as LanguageType;
    }
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
    this.stuff.map(thing => thing.create(this));
    this.backButton.setXY(gameWidth * 0.04, gameHeight * 0.02);
    this.backButton.onPress = () => {
      this.scene.start(languageSelectSceneKey);
    };
    this.buttons = [];

    if (this.language === 'japanese') {
      this.hintToggle = new AnswerButton(this);
      this.hintToggle.setXY(gameWidth / 2, gameHeight * 0.95);
      this.updateHintToggle();
      this.hintToggle.onPress = () => {
        this.isHintOn = !this.isHintOn;
        this.updateHintToggle();
      };
    }

    const titleText = titleCase(this.language) + ' Shooter';
    const title = addText(this, gameWidth / 2, gameHeight / 20, titleText);
    title.setFontSize(0.05 * gameHeight);
    title.setAlign("center");
    title.setOrigin(0.5);

    const columnCount = 6;
    for (let index = 0; index < maxLevel; index++) {
      const level = index + 1;
      const button = new AnswerButton(this);
      button.width = gameWidth * 0.115;
      if (storage.bestSpeed.get(this.language, level)) {
        // button.setRestColor(0x99dd99);
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
          language: this.language,
        };
        this.scene.start(gameSceneKey, sceneInfo);
      };

      const duration = storage.bestSpeed.get(this.language, level);
      let starFrame = uiNameToFrame.zeroStar;
      if (duration) {
        starFrame = whichStarFrame(duration, 0);
        const starsSprite = this.ui.sprite(starFrame);
        starsSprite.x = x;
        starsSprite.y = y;
        starsSprite.depth = 12;
      }
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

function titleCase(str: string) {
  // https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
  let upper = true;
  let newStr = "";
  for (let i = 0, l = str.length; i < l; i++) {
    if (str[i] == " ") {
      upper = true;
      newStr += " ";
      continue;
    }
    newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase();
    upper = false;
  }
  return newStr;
}
