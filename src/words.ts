

// import wordsTxt from '../assets/words.txt?raw' 
import hiraganaWordsTxt from '../assets/jp-words.txt?raw'
import { shuffle } from './utils';

export interface Word {
  id: string;
  english: string;
  kanji: string;
  hiragana: string;
}

export let globalWords: Word[] = [];

function init() {
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
      id: `${kanji}:${hiragana}`,
      english,
      kanji,
      hiragana,
    });
  }
  return wordObjects;
}

// const maxLearningWordsAtOnce = 10;
export const questionsAtOnce = 3;
export const maxLevel = 48;
export interface GuessResult {
  success: boolean;
  gameOver: boolean;
}

export class WordGame {
  level = 1;
  learningWords: Word[] = [];

  buttonWords: Word[] = [];
  nextQuestionIndex = 0;
  correctWordIndex = 0;
  corrects = 0;
  mistakes = 0;

  constructor(level: number) {
    this.level = level || 1;
    init();

    // `Math.floor` here guarantees we'll have wordCount of words each level
    // though we might skip the last few words. Not a problem because the list
    // is sorted by word popularity.
    const wordCount = Math.floor(globalWords.length / maxLevel);
    const firstIndex = (level - 1) * wordCount;
    this.learningWords = globalWords.slice(firstIndex, firstIndex + wordCount);
    shuffle(this.learningWords);
    if (this.learningWords.length <= questionsAtOnce) {
      throw new Error("popNextWord will have an infinite loop");
    }
    this.fillButtonWords();
  }

  popNextWord() {
    let nextWord;
    while (true) {
      nextWord = this.learningWords[this.nextQuestionIndex];
      this.nextQuestionIndex++;
      if (this.nextQuestionIndex >= this.learningWords.length) {
        this.nextQuestionIndex = 0;
      }
      if (this.buttonWords.indexOf(nextWord) >= 0) {
        // Duplicate words in the buttons makes no sense because the user could
        // have two correct answers for one definition, and only one answer works.
        // TODO: one day solve this mwith a cool shuffle. I have no idea 
        // how that algorithm would work. Probably worth defining this problem clearly.
        continue;
      } else {
        break;
      }
    }
    this.correctWordIndex = Math.floor(Math.random() * this.buttonWords.length);
    return nextWord;
  }

  fillButtonWords() {
    while (this.buttonWords.length < questionsAtOnce) {
      const nextWord = this.popNextWord();
      this.buttonWords.push(nextWord);
    }
  }

  getAnswerWord() {
    return this.buttonWords[this.correctWordIndex];
  }

  remainingWords() {
    const levelLength = this.learningWords.length;
    return levelLength - this.corrects;
  }

  totalWords() {
    return this.learningWords.length;
  }

  tryAnswer(index: number): GuessResult {
    if (index === this.correctWordIndex) {
      this.corrects++;

      // Replace the word with whateve comes next
      const nextWord = this.popNextWord();
      this.buttonWords[index] = nextWord;
      let gameOver = false;
      if (this.remainingWords() <= 0) {
        gameOver = true;
      }

      this.fillButtonWords();
      return {
        success: true,
        gameOver,
      };
    } else {
      // Take away all the points earned on this word
      this.mistakes++;
      return {
        success: false,
        gameOver: false,
      };
    }
  }

  score() {
    return this.corrects - this.mistakes;
  }

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

