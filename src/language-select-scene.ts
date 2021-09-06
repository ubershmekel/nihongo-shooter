import 'phaser';
import { Background } from './fx-background';
import { Stuff } from './stuff';
import { gameHeight, gameWidth } from './config';
import { addText } from './utils';
import { menuSceneKey, MenuSceneProps } from './menu-scene';
import { LanguageType } from './words';
import flagsUrl from '../assets/flags.png';
import { ImageButtonSimple } from './image-button-simple';

export const languageSelectSceneKey = 'LanguageSelectScene';

const languages: { [key: string]: LanguageType } = {
  chinese: "chinese",
  french: "french",
  german: "german",
  hebrew: "hebrew",
  italian: "italian",
  japanese: "japanese",
  korean: "korean",
  portuguese: "portuguese",
  russian: "russian",
  spanish: "spanish",
};

const langToFlagTile: { [key in LanguageType]: number } = {
  portuguese: 0,
  french: 1,
  chinese: 2,
  german: 3,
  spanish: 4,
  russian: 5,
  korean: 6,
  japanese: 7,
  hebrew: 8,
  italian: 9,
}

const flagSheet = 'flag-sheet';

export class LanguageSelectScene extends Phaser.Scene {
  private background = new Background();
  private stuff: Stuff[] = [
    this.background,
  ];

  constructor() {
    super({
      key: languageSelectSceneKey,
    });
  }

  preload(): void {
    this.stuff.map(thing => thing.preload(this));

    this.load.spritesheet(
      flagSheet,
      flagsUrl,
      {
        frameWidth: 120,
        frameHeight: 120,
        margin: 0,
        spacing: 0,
      }
    );

  }

  create(): void {
    this.stuff.map(thing => thing.create(this));
    const title = addText(this, gameWidth / 2, gameHeight / 20, 'Nihongo Shooter');
    title.setFontSize(0.05 * gameHeight);
    title.setAlign("center");
    title.setOrigin(0.5);


    const columnCount = 3;
    const langOrder = Object.values(languages);
    langOrder.sort();

    for (let index = 0; index < langOrder.length; index++) {
      const lang = langOrder[index];
      const sprite = this.add.sprite(0, 0, flagSheet)
      sprite.setFrame(langToFlagTile[lang]);
      sprite.width = gameWidth * 0.115;
      const button = new ImageButtonSimple(sprite);

      const x = (1.04 + 3.4 * (index % columnCount)) * gameWidth / 10;
      const y = (2.4 + 2 * Math.floor(index / columnCount)) * gameHeight / 10;
      button.setXY(x, y);
      button.onPress = () => {
        const sceneInfo: MenuSceneProps = {
          language: lang,
        };
        this.scene.start(menuSceneKey, sceneInfo);
      };
    }
  }

  update(): void {
    this.stuff.map(thing => {
      if (thing.update) thing.update(this)
    });
  }
}