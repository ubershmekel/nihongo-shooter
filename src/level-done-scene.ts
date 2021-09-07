import 'phaser';
import { AnswerButton } from './answer-button';
import { gameHeight, gameWidth } from './config';
import { Background } from './fx-background';
import { UI } from './fx-ui';
import { menuSceneKey } from './menu-scene';
import { whichStarFrame } from './scoring';
import { storage } from './storage';
import { Stuff } from './stuff';
import { addText } from './utils';

export const levelDoneSceneKey = 'LevelDoneScene';
export interface LevelDoneData {
  level: number,
  corrects: number,
  mistakes: number,
  duration: number,
  language: string,
}

export class LevelDoneScene extends Phaser.Scene {
  private levelDoneData!: LevelDoneData;
  private background = new Background();
  private buttons!: AnswerButton[];
  private ui = new UI();

  private stuff: Stuff[] = [
    this.background,
    this.ui,
  ];

  constructor() {
    super({
      key: levelDoneSceneKey,
    });
  }

  init(props: any) {
    console.log("props", props);
    this.levelDoneData = props;
  }

  preload(): void {
    this.stuff.map(thing => thing.preload(this));
  }

  create(): void {
    this.buttons = [];
    this.stuff.map(thing => thing.create(this));
    const titleText = `LEVEL ${this.levelDoneData.level}`;
    const title = addText(this, gameWidth / 2, 0.05 * gameHeight, titleText);
    title.setFontSize(0.06 * gameHeight);
    title.setAlign("center");
    title.setOrigin(0.5);

    const rows = [
      "Hits: " + this.levelDoneData.corrects,
      "Misses: " + this.levelDoneData.mistakes,
      `In: ${this.levelDoneData.duration} seconds`,
    ];

    const bestSpeed = storage.bestSpeed.get(this.levelDoneData.language, this.levelDoneData.level);
    let newRecord = false;
    if (this.levelDoneData.mistakes == 0) {
      if (!bestSpeed || (bestSpeed && this.levelDoneData.duration < bestSpeed)) {
        storage.bestSpeed.set(this.levelDoneData.language, this.levelDoneData.level, this.levelDoneData.duration);
        newRecord = true;
      }
    }
    if (newRecord) {
      rows.push(`New best speed!`);
    } else {
      if (bestSpeed) {
        rows.push(`Best: ${bestSpeed} seconds`);
      } else {
        rows.push("Get zero misses\nto beat the level");
      }
    }

    for (const [index, element] of rows.entries()) {
      const text = addText(this, gameWidth / 8, (20 + index * 7) * gameHeight / 100, element);
      text.setFontSize(0.04 * gameHeight);
      title.setOrigin(0.5);
    }

    const button = new AnswerButton(this);
    this.buttons.push(button);
    button.setText("COOL");
    button.setXY(this.game.scale.width / 2, this.game.scale.height * 0.8);
    button.onPress = () => {
      this.scene.start(menuSceneKey);
    };

    const starFrame = whichStarFrame(this.levelDoneData.duration, this.levelDoneData.mistakes);
    const sprite = this.ui.sprite(starFrame);
    sprite.x = gameWidth / 2;
    sprite.y = 0.16 * gameHeight;
  }

  update(): void {
    this.stuff.map(thing => {
      if (thing.update) thing.update(this)
    });
  }
}