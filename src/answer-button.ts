const borderThickness = 3;
const borderColor = 0x404798;
const borderAlpha = 1;
const boxAlpha = 0.8;
const boxRestColor = 0x373737;
const boxActiveColor = 0x903030;
const boxHoverColor = 0x603030;
const padding = 10;

export class AnswerButton {
  scene: Phaser.Scene;
  sceneText: Phaser.GameObjects.Text;
  graphics: Phaser.GameObjects.Graphics;
  boxColor = boxRestColor;
  onPress = () => {};

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.sceneText = scene.add.text(50, 50, "asdf");
    this.sceneText.setFontSize(20);
    this.sceneText.setAlign('center');
    this.sceneText.setOrigin(0.5);
    this.sceneText.setInteractive();

    this.graphics = this.scene.add.graphics();
    this.graphics.setScrollFactor(0);

    // Buttons should be in front of most things
    this.sceneText.depth = 10;
    this.graphics.depth = 9;

    this.fixGraphics();
    this.setXY(0, 0);

    this.sceneText.on('pointerover', () => this.enterButtonHoverState() )
    .on('pointerout', () => this.enterButtonRestState() )
    .on('pointerdown', () => this.enterButtonActiveState() )
    .on('pointerup', () => {
      this.enterButtonHoverState();
      this.onPress();
    });
  }

  enterButtonHoverState() {
    this.boxColor = boxHoverColor;
    this.fixGraphics();
  }

  enterButtonRestState() {
    this.boxColor = boxRestColor;
    this.fixGraphics();
  }

  enterButtonActiveState() {
    this.boxColor = boxActiveColor;
    this.fixGraphics();
  }

  fixGraphics() {
    this.graphics.clear();

    // const gameWidth = +this.scene.sys.game.config.width;
    // const gameHeight = +this.scene.sys.game.config.height;
    const boxWidth = this.sceneText.width + (padding * 2);
    const boxHeight = this.sceneText.height + (padding * 2);
    const tbound = this.sceneText.getBounds();
    const boxX = tbound.x - padding;
    const boxY = tbound.y - padding;

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
    // this.graphics.x = x;
    // this.graphics.y = y;
  }
}