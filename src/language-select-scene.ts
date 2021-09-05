import 'phaser';
import { Background } from './fx-background';
import { Stuff } from './stuff';
import { AnswerButton } from './answer-button';
import { gameHeight, gameWidth } from './config';
import { addText } from './utils';
import { menuSceneKey, MenuSceneProps } from './menu-scene';
import { LanguageType } from './words';

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

export class LanguageSelectScene extends Phaser.Scene {
  private background = new Background();
  private stuff: Stuff[] = [
    this.background,
  ];
  private buttons!: AnswerButton[];

  constructor() {
    super({
      key: languageSelectSceneKey,
    });
  }

  preload(): void {
    this.stuff.map(thing => thing.preload(this));
  }

  create(): void {
    this.stuff.map(thing => thing.create(this));
    this.buttons = [];
    const title = addText(this, gameWidth / 2, gameHeight / 20, 'Nihongo Shooter');
    title.setFontSize(0.05 * gameHeight);
    title.setAlign("center");
    title.setOrigin(0.5);

    const columnCount = 3;
    const langOrder = Object.values(languages);
    langOrder.sort();
    for (let index = 0; index < langOrder.length; index++) {
      const lang = langOrder[index];
      const button = new AnswerButton(this);
      button.width = gameWidth * 0.115;

      this.buttons.push(button);
      button.setText('' + lang);
      const x = (1.5 + 3.4 * (index % columnCount)) * gameWidth / 10;
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