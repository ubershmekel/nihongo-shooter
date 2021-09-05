import { Stuff } from "./stuff";

export class ImageButton implements Stuff {
  sprite!: Phaser.GameObjects.Sprite;
  imageUrl: string;
  imageName: string;

  onPress = () => { };

  constructor(imageName: string, imageUrl: string) {
    this.imageName = imageName;
    this.imageUrl = imageUrl;

  }

  create(scene: Phaser.Scene) {
    this.sprite = scene.add.sprite(0, 0, this.imageName);
    this.sprite.setOrigin(0, 0)
    this.sprite.setScrollFactor(0);
    this.sprite.setInteractive();
    this.sprite.on('pointerover', () => this.enterButtonHoverState())
      .on('pointerout', () => this.enterButtonRestState())
      .on('pointerdown', () => this.enterButtonActiveState())
      .on('pointerup', () => {
        this.enterButtonHoverState();
        this.onPress();
      });

    this.setXY(0, 0);

    // Buttons should be in front of most things, z-index, layer
    this.sprite.depth = 11;
  }

  preload(scene: Phaser.Scene) {
    scene.load.image(this.imageName, this.imageUrl);
  }

  enterButtonHoverState() {
    this.sprite.setAlpha(0.5);
  }

  enterButtonRestState() {
    this.sprite.setAlpha(1.0);
  }

  enterButtonActiveState() {
    this.sprite.setAlpha(0.3);
  }

  setXY(x: number, y: number) {
    this.sprite.x = x;
    this.sprite.y = y;
  }

}