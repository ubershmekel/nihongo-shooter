import { gameHeight, gameWidth } from "./config";

const borderThickness = 3;
const borderColor = 0x404798;
const borderAlpha = 1;
const boxAlpha = 0.8;
const boxActiveColor = 0x903030;
const boxHoverColor = 0x603030;
const padding = gameHeight / 60;

export class AnswerButton {
  scene: Phaser.Scene;
  sceneText: Phaser.GameObjects.Text;
  graphics: Phaser.GameObjects.Graphics;
  rect: Phaser.GameObjects.Rectangle;
  width: number = 0;
  private boxRestColor = 0x373737;
  private boxColor = this.boxRestColor;
  onPress = () => { };

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.sceneText = scene.add.text(50, 50, "will-be-replaced-text");
    this.sceneText.setFontSize(gameHeight / 30);
    this.sceneText.setAlign('center');
    this.sceneText.setOrigin(0.5);
    this.sceneText.setInteractive();
    // `testString` prevents the characters from getting cropped
    // See https://github.com/photonstorm/phaser/issues/3960
    this.sceneText.style.setTestString('䲜笑う狭い友達|週漢字⎝|MÉgjpqy');
    this.sceneText.setWordWrapWidth(80 * gameWidth / 100, true);

    this.graphics = this.scene.add.graphics();
    this.graphics.setScrollFactor(0);

    this.rect = scene.add.rectangle();
    // this.rect.setStrokeStyle(1, 0x00ff00);
    this.rect.setOrigin(0, 0)
    this.rect.setScrollFactor(0);
    this.rect.setInteractive();
    this.rect.on('pointerover', () => this.enterButtonHoverState())
      .on('pointerout', () => this.enterButtonRestState())
      .on('pointerdown', () => this.enterButtonActiveState())
      .on('pointerup', () => {
        this.enterButtonHoverState();
        this.onPress();
      });

    this.setXY(0, 0);

    // Buttons should be in front of most things, z-index, layer
    this.rect.depth = 11;
    this.sceneText.depth = 10;
    this.graphics.depth = 9;
  }

  enterButtonHoverState() {
    this.boxColor = boxHoverColor;
    this.fixGraphics();
  }

  enterButtonRestState() {
    this.boxColor = this.boxRestColor;
    this.fixGraphics();
  }

  enterButtonActiveState() {
    this.boxColor = boxActiveColor;
    this.fixGraphics();
  }

  fixGraphics() {
    this.graphics.clear();

    let boxWidth = this.sceneText.width + (padding * 2);
    const boxHeight = this.sceneText.height + (padding * 2);
    const tbound = this.sceneText.getBounds();
    let boxX = tbound.x - padding;
    const boxY = tbound.y - padding;

    if (this.width) {
      boxWidth = this.width;
      boxX = this.sceneText.x - this.width / 2;
    }

    this.rect.x = boxX;
    this.rect.y = boxY;
    this.rect.displayWidth = boxWidth;
    this.rect.displayHeight = boxHeight;

    this.graphics.fillStyle(this.boxColor, boxAlpha);
    this.graphics.fillRect(boxX, boxY, boxWidth - 1, boxHeight - 1);

    // Creates the border rectangle of the button
    this.graphics.lineStyle(borderThickness, borderColor, borderAlpha);
    this.graphics.strokeRect(boxX, boxY, boxWidth, boxHeight);
  }

  setText(text: string) {
    this.sceneText.setText(text);
    this.fixGraphics();
  }

  setXY(x: number, y: number) {
    this.sceneText.x = x;
    this.sceneText.y = y;
    this.fixGraphics();
  }

  setRestColor(color: number) {
    this.boxRestColor = color;
    this.enterButtonRestState();
  }
}