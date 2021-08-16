
export function shuffle(array: any[]) {
  // in-place shuffle

  var currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function tweenPromise(scene: Phaser.Scene, config: Phaser.Types.Tweens.TweenBuilderConfig | object) {
  return new Promise(resolve => {
    // Type cast to avoid `onComplete` does not exist on `typeof object`
    (config as Phaser.Types.Tweens.TweenBuilderConfig).onComplete = resolve;
    scene.tweens.add(config)
  });
}

export function sleep(ms: number) {
  // https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
  return new Promise(resolve => setTimeout(resolve, ms));
}