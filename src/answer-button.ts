const borderThickness = 3;
const borderColor = 0x404798;
const borderAlpha = 1;
const boxAlpha = 0.8;
const boxColor = 0x373737;
const padding = 10;

export class AnswerButton {
  scene: Phaser.Scene;
  sceneText: Phaser.GameObjects.Text;
  graphics: Phaser.GameObjects.Graphics;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.sceneText = scene.add.text(50, 50, "asdf");
    this.sceneText.setFontSize(20);
    this.graphics = this.scene.add.graphics();

    // Buttons should be in front of most things
    this.sceneText.depth = 10;
    this.graphics.depth = 9;

    this.fixGraphics();
    this.setXY(0, 0);
  }

  fixGraphics() {
    this.graphics.clear();

    // const gameWidth = +this.scene.sys.game.config.width;
    // const gameHeight = +this.scene.sys.game.config.height;
    const boxWidth = this.sceneText.width + (padding * 2);
    const boxHeight = this.sceneText.height + (padding * 2);
    const boxX = -padding;
    const boxY = -padding;

    this.graphics.fillStyle(boxColor, boxAlpha);
    this.graphics.fillRect(boxX, boxY, boxWidth - 1, boxHeight - 1);

    // Creates the border rectangle of the button
    this.graphics.lineStyle(borderThickness, borderColor, borderAlpha);
    this.graphics.strokeRect(boxX, boxY, boxWidth, boxHeight);
    this.graphics.setScrollFactor(0);
  }

  setText(text: string) {
    this.sceneText.setText(text);
    this.fixGraphics();
  }

  setXY(x: number, y: number) {
    this.sceneText.x = x;
    this.sceneText.y = y;
    this.graphics.x = x;
    this.graphics.y = y;
  }
}