import './style.css'

import './canvas-read-fix';
import 'phaser';
import { MenuScene } from './menu-scene';
import { GameScene } from './game-scene';
import { LevelDoneScene } from './level-done-scene';
import { gameHeight, gameWidth } from './config';
import { LanguageSelectScene } from './language-select-scene';
import { migrateStorage1, storage } from './storage';
import { GameAnalytics } from 'gameanalytics';
import { setPseudoFullscreen, toggleFullscreen } from './fullscreen';

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
  toggleFullscreen((window as any)._game);
}

window.addEventListener('load', () => {
  // Fix data from when the game only had japanese
  migrateStorage1();

  // Analytics
  GameAnalytics.initialize('52e2232c1978d43ea0a92c8843b41cb5', '37d89161a925a776310beaac76278b047ea1df20');
  GameAnalytics.setEnabledInfoLog(import.meta.env.DEV);

  // Skip the language selection scren if you already chose one
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

  // Expose `_game` to allow debugging, mute button and fullscreen button
  const game = new Game(gameConfig);
  (window as any)._game = game;

  // Launched from the iOS home screen, go straight to the game.
  if ((navigator as any).standalone) {
    setPseudoFullscreen(game, true);
  }
});
