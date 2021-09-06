import './style.css'

import 'phaser';
import { MenuScene } from './menu-scene';
import { GameScene } from './game-scene';
import { LevelDoneScene } from './level-done-scene';
import { gameHeight, gameWidth } from './config';
import { LanguageSelectScene } from './language-select-scene';
import { storage } from './storage';

const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Nihongo Shooter',
  url: 'https://github.com/ubershmekel/nihongo-shooter',
  version: '2.0',
  width: gameWidth,
  height: gameHeight,
  type: Phaser.AUTO,
  parent: 'app',
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
  const scenesList: typeof Phaser.Scene[] = [
    LanguageSelectScene,
    MenuScene,
    GameScene,
    LevelDoneScene,
  ];
  const defaultLanguage = storage.defaultLanguage.get();
  if (defaultLanguage) {
    // Move first scene to end, asking typescript to ignore the possibility of
    // `shift` returning undefined.
    scenesList.push(scenesList.shift() as typeof Phaser.Scene);
  }
  gameConfig.scene = scenesList;

  (window as any)._game = new Game(gameConfig);
});
