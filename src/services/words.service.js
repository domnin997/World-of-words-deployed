import localforage from 'localforage';

class WordsService {

  async getWords (userId) {
    const response = await localforage.getItem(userId);
    const output = response ? response : false;
    return output;
  }

  async addWord (userId, newWord) {
    const words = await this.getWords(userId);
    newWord.id = crypto.randomUUID();

    if (words) {
      words.push(newWord);
        localforage.setItem(userId, words);
        console.log('Добавлено')
        return true;
    } else {
        localforage.setItem(userId, [newWord]);
        console.log('Ошибка добавления')
        return false;
    }
  }

  async deleteWord (userId, wordToDelete) {
    const wordsArray = await localforage.getItem(userId);

    if (wordsArray) {
      const newWordsArray = wordsArray.filter((word) => {
        return word.id !== wordToDelete;
      })
      localforage.setItem(userId, newWordsArray);
    }
  }

  async amendWord (userId, amendedWord) {
    const wordsArray = await localforage.getItem(userId);
    const amendedWordIndex = wordsArray.findIndex((word) => {
      return word.id === amendedWord.id;
    })
    wordsArray.splice(amendedWordIndex, 1, amendedWord);
    localforage.setItem(userId, wordsArray);
  }

  clearDB (userId) {
    localforage.setItem(userId, []);
  }

}

export const wordsService = new WordsService();