import 'phaser';
import gaspUrl from '../assets/gasp.mp3';
import { AnswerButton } from './answer-button';
import { gameHeight, gameWidth } from './config';
import { Background } from './fx-background';
import { menuSceneKey } from './menu-scene';
import { Stuff } from './stuff';

export const levelDoneSceneKey = 'LevelDoneScene';
export interface LevelDoneData {
  corrects: number,
  mistakes: number,
  duration: number,
}

export class LevelDoneScene extends Phaser.Scene {
  private levelDoneData!: LevelDoneData;
  private background = new Background();
  private buttons: AnswerButton[] = [];

  private stuff: Stuff[] = [
    this.background,
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
    this.load.audio('gasp', gaspUrl);
  }

  create(): void {
    this.stuff.map(thing => thing.create(this));
    const title = this.add.text(gameWidth / 2, 0.05 * gameHeight, 'LEVEL COMPLETE', {
      fontSize: 0.06 * gameHeight + 'px',
      fontFamily: "Helvetica",
      align: "center",
    });
    title.setOrigin(0.5);

    const rows = [
      "Hits: " + this.levelDoneData.corrects,
      "Misses: " + this.levelDoneData.mistakes,
      `In: ${this.levelDoneData.duration} seconds`,
    ];
    for (const [index, element] of rows.entries()) {
      this.add.text(gameWidth / 8, (20 + index * 7) * gameHeight / 100, element, {
        fontSize: 0.04 * gameHeight + 'px',
        fontFamily: "Helvetica",
        // align: "center",
      });
      title.setOrigin(0.5);
    }

    const button = new AnswerButton(this);
    this.buttons.push(button);
    button.setText("COOL");
    button.setXY(this.game.scale.width / 2, this.game.scale.height * 0.7);
    button.onPress = () => {
      this.scene.start(menuSceneKey);
    };

  }

  update(): void {
    this.stuff.map(thing => {
      if (thing.update) thing.update(this)
    });
  }
}