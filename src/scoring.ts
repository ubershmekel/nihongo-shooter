import { uiNameToFrame } from "./fx-ui";

export const medalTimeSeconds = 40.0;
export const maxMistakes = 0;

export function whichStarFrame(durationSeconds: number, mistakes = 0): number {
  let starFrame = uiNameToFrame.zeroStar;
  if (mistakes <= maxMistakes) {
    starFrame = uiNameToFrame.oneStar;
    if (durationSeconds < medalTimeSeconds) {
      starFrame = uiNameToFrame.twoStar;
    }
  }
  return starFrame;
}
