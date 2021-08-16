import './style.css'

import 'phaser';
import { MenuScene } from './menu-scene';
import { GameScene } from './game-scene';
import { LevelDoneScene } from './level-done-scene';
import { gameHeight, gameWidth } from './config';

const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Nihongo Shooter',
  url: 'https://github.com/ubershmekel/nihongo-shooter',
  version: '2.0',
  width: gameWidth,
  height: gameHeight,
  type: Phaser.AUTO,
  parent: 'app',
  scene: [
    MenuScene,
    GameScene,
    LevelDoneScene,
  ],
  input: {
    keyboard: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false
    }
  },
  backgroundColor: '#000020',
  render: { pixelArt: false, antialias: true },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    // `fullscreenTarget` must be defined for phones to not have
    // a small margin during fullscreen.
    fullscreenTarget: 'app',
    expandParent: false,
  },
};

export class Game extends Phaser.Game {
  constructor(config: Phaser.Types.Core.GameConfig) {
    super(config);
  }
}

(window as any).toggleFullscreen = () => {
  if (document["exitFullscreen"]) {
    (window as any)._game.scale.toggleFullscreen();
  } else {
    // iphones do not support fullscreen, so just scroll down.
    document.getElementById('app')?.scrollIntoView();
  }
}

window.addEventListener('load', () => {
  // Expose `_game` to allow debugging, mute button and fullscreen button
  (window as any)._game = new Game(GameConfig);
});
