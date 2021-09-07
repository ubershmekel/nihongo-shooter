import { maxLevel } from "./words";

const keys = {
  defaultLanguageKey: 'defaultLanguageKey',
}

function bestSpeedKeyOld(level: number) {
  return "best-speed-" + level;
}

function bestSpeedKey(lang: string, level: number) {
  return lang + "-best-speed-" + level;
}

export const storage = {
  bestSpeed: {
    get(lang: string, level: number) {
      const value = localStorage.getItem(bestSpeedKey(lang, level));
      if (value) {
        return +value;
      } else {
        return undefined;
      }
    },
    set(lang: string, level: number, value: number) {
      localStorage.setItem(bestSpeedKey(lang, level), value.toString());
    }
  },
  defaultLanguage: {
    get(): string | null {
      return localStorage.getItem(keys.defaultLanguageKey);
    },
    set(lang: string) {
      localStorage.setItem(keys.defaultLanguageKey, lang);
    }
  }
}

export function migrateStorage1() {
  for (let index = 0; index < maxLevel; index++) {
    const level = index + 1;
    const speed = localStorage.getItem(bestSpeedKeyOld(level));
    if (speed) {
      storage.bestSpeed.set('japanese', level, +speed);
    }
  }
}