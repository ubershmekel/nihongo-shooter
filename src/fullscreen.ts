function canNativeFullscreen(game: Phaser.Game) {
  // iPhones may expose parts of the fullscreen API without honoring it,
  // `fullscreenEnabled` is what tells us if it actually works.
  const enabled = document.fullscreenEnabled || (document as any).webkitFullscreenEnabled;
  return enabled && game.scale.fullscreen.available;
}

function isPseudoFullscreen() {
  return document.documentElement.classList.contains('pseudo-fullscreen');
}

export function setPseudoFullscreen(game: Phaser.Game, on: boolean) {
  // Pin the game to the visible viewport with CSS, see `.pseudo-fullscreen` in style.css
  document.documentElement.classList.toggle('pseudo-fullscreen', on);
  window.scrollTo(0, 0);
  // Re-measure #app now instead of waiting for phaser's periodic check
  game.scale.getParentBounds();
  game.scale.refresh();
}

export function toggleFullscreen(game: Phaser.Game) {
  const isPseudo = isPseudoFullscreen();
  if (!isPseudo && canNativeFullscreen(game)) {
    game.scale.toggleFullscreen();
  } else {
    // iphones do not support fullscreen, so fake it.
    setPseudoFullscreen(game, !isPseudo);
  }
}

function isPhone(game: Phaser.Game) {
  // iPads pretend to be macs, but macs do not have touch screens.
  const isIPad = game.device.os.macOS && navigator.maxTouchPoints > 1;
  return !game.device.os.desktop || isIPad;
}

// Call from a `pointerup` handler, browsers only allow fullscreen
// in response to a user gesture.
export function enterFullscreenOnPhone(game: Phaser.Game) {
  if (!isPhone(game) || game.scale.isFullscreen || isPseudoFullscreen()) {
    return;
  }
  if (canNativeFullscreen(game)) {
    game.scale.startFullscreen();
  } else {
    setPseudoFullscreen(game, true);
  }
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isPseudoFullscreen()) {
    setPseudoFullscreen((window as any)._game, false);
  }
});
