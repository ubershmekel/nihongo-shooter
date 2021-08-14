import imageUrl from '../assets/space-debris.png';
import { Stuff } from './stuff';

const keys = {
  sheet: "space-debris-sheet",
}

const asteroidCount = 20;

export class Background implements Stuff {
  private sprites: {
    s: Phaser.GameObjects.Image,
    velocity: number,
    angularV: number,
  }[] = [];

  preload(scene: Phaser.Scene) {
    scene.load.spritesheet(
      keys.sheet,
      imageUrl,
      {
        frameWidth: 54,
        frameHeight: 54,
        margin: 0,
        spacing: 0,
      }
    );
  }

  create(scene: Phaser.Scene) {
    for (let i = 0; i < asteroidCount; i++) {
      const x = Phaser.Math.Between(-64, scene.game.scale.width);
      const y = Phaser.Math.Between(-64, scene.game.scale.height);

      const image = scene.add.image(x, y, keys.sheet, Math.floor(Math.random() * 4));
      image.setTint(0x666666); // darken, wish I knew how to not make it transparent
      image.scale = 0.2 + 2 * Math.random();

      image.setBlendMode(Phaser.BlendModes.ADD);
      this.sprites.push({
        s: image,
        velocity: 0.5 + Math.random() * 1,
        angularV: (0.5 - Math.random()) * 2,
      });
    }
  }

  update(scene: Phaser.Scene) {
    const debrisMaxY = scene.game.scale.height + 100;
    const debrisMinY = -100
    for (let i = 0; i < this.sprites.length; i++) {
      const sprite = this.sprites[i].s;

      sprite.y += this.sprites[i].velocity;
      sprite.angle += this.sprites[i].angularV;

      if (sprite.y > debrisMaxY) {
        sprite.y = debrisMinY;
      }
    }
  }
}