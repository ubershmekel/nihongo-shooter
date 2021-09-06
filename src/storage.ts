const keys = {
  defaultLanguageKey: 'defaultLanguageKey',
}

function bestSpeedKey(level: number) {
  return "best-speed-" + level;
}

export const storage = {
  bestSpeed: {
    get(level: number) {
      const value = localStorage.getItem(bestSpeedKey(level));
      if (value) {
        return +value;
      } else {
        return undefined;
      }
    },
    set(level: number, value: number) {
      localStorage.setItem(bestSpeedKey(level), value.toString());
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
