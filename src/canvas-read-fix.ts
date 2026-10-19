// Phaser 3.54 measures text with `getImageData`, which is slow on GPU backed
// 2d canvases and makes Chrome warn about `willReadFrequently` on every text.
// Phaser 3.60 fixed this. This module must be imported before 'phaser'
// because phaser grabs pooled 2d contexts when it loads.
const originalGetContext = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function (this: HTMLCanvasElement, contextId: string, options?: any) {
  if (contextId === '2d') {
    options = { willReadFrequently: true, ...options };
  }
  return originalGetContext.call(this, contextId, options);
} as typeof originalGetContext;

export { };
