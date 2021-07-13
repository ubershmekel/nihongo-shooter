

// import wordsTxt from '../assets/words.txt?raw' 
import hiraganaWordsTxt from '../assets/jp-words.txt?raw' 

export interface Word {
  english: string;
  kanji: string;
  hiragana: string;
}

export let globalWords: Word[] = [];

export function init() {
  if (globalWords.length === 0) {
    globalWords = getWords();
  }
}

function getWords(): Word[] {
  const lines = hiraganaWordsTxt.split('\n');
  const wordObjects = [];
  for (const line of lines) {
    const [kanji, hiragana, english] = line.split(':');
    wordObjects.push({
      english,
      kanji,
      hiragana,
    });
  }
  return wordObjects;
}

// function parseWords(text: string) {
//   // 女性 josei : woman, female formal
//   // 答える kotaeru : give an answer
//   const lines = text.split('\n');
//   const wordObjects = [];
//   for (const line of lines) {
//     const parts = line.trim().split(':');
//     if (!parts || parts.length < 2) {
//       continue;
//     }
//     const definition = parts[1].trim();
//     const spellingParts = parts[0].trim().split(' ');
//     const jp = spellingParts[0].trim();
//     const romaji = spellingParts[1].trim();
//     wordObjects.push({
//       definition,
//       jp,
//       romaji,
//     })
//   }
//   return wordObjects;
// }

