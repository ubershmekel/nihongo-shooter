

// import wordsTxt from '../assets/words.txt?raw' 
import hiraganaWordsTxt from '../assets/jp-words.txt?raw' 

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

const maxLearningWordsAtOnce = 10;
const questionsAtOnce = 3;

export class WordGame {
  nextGlobalWordIndex = 0;
  learningWords: Word[] = [];

  buttonWords: Word[] = [];
  nextQuestionIndex = 0;
  correctWordIndex = 0;
  score = 0;
  wordSuccessCount: { [id: string]: number } = {};

  constructor() {
    init();
    this.reset();
  }

  nextQuestionWord() {
    let nextWord;
    while (true) {
      nextWord = this.learningWords[this.nextQuestionIndex];
      this.nextQuestionIndex++;
      if (this.nextQuestionIndex >= this.learningWords.length) {
        this.nextQuestionIndex = 0;
        shuffle(this.learningWords);
      }
      if (this.buttonWords.indexOf(nextWord) < 0) {
        // found a new word, yay
        break;
      }
    }
    // Raffle which word is going to be the right word for user to choose
    this.correctWordIndex = Math.floor(Math.random() * this.buttonWords.length);
    return nextWord;
  }

  reset() {
    // Fill `learningWords`
    while (this.learningWords.length < maxLearningWordsAtOnce) {
      if (this.nextGlobalWordIndex >= globalWords.length) {
        console.log("finished...");
        return;
      }

      const nextWord = globalWords[this.nextGlobalWordIndex];
      this.learningWords.push(nextWord);
      this.nextGlobalWordIndex++;
    }

    // Fill `questions`
    while (this.buttonWords.length < questionsAtOnce) {
      const nextWord = this.nextQuestionWord();
      this.buttonWords.push(nextWord);
    }

    return;
  }

  getAnswerWord() {
    return this.buttonWords[this.correctWordIndex];
  }

  tryAnswer(index: number): boolean {
    const thisWord = this.getAnswerWord();
    let successCount = this.wordSuccessCount[thisWord.id] || 0;
    if (index === this.correctWordIndex) {
      this.wordSuccessCount[thisWord.id] = successCount + 1;
      this.score += 1;
      
      // Remove this answer from the buttons, you got it
      // this.buttonWords.splice(index, 1);
      const nextWord = this.nextQuestionWord();
      this.buttonWords[index] = nextWord;

      if (this.wordSuccessCount[thisWord.id] > 2) {
        // no need for this word anymore, we learned it
        console.log("congrats, done with word");
        const wordInLearningIndex = this.learningWords.indexOf(thisWord);
        this.learningWords.splice(wordInLearningIndex, 1);
      }
      this.reset();
      return true;
    } else {
      // Take away all the points earned on this word
      this.score = this.score - 1;
      this.wordSuccessCount[thisWord.id] = 0;
      return false;
    }
  }
}

function shuffle(array: any[]) {
  // in-place shuffle

  var currentIndex = array.length,  randomIndex;

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

