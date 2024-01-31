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
        return true;
    } else {
        localforage.setItem(userId, [newWord]);
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

  // Инструменты для обновленной структуры БД

  async getUserData (userId) {
    const userData = await localforage.getItem(userId);
    const output = userData ? userData : {dictionaries: [], words: []};
    console.log(output)
    return output;
  }

  async setUserData (userId, userData) {
    localforage.setItem(userId, userData);
  }

  async getUserDictionaries (userId) {
    const userData = await this.getUserData(userId);
    const dictionaries = userData.dictionaries;
    console.log(dictionaries)
    return {
      status: 'ok',
      dictionaries
    };
  }

  async addUserDictionary (userId, dictionaryName) {
    console.log(dictionaryName)
    const userData = await this.getUserData(userId);
    userData.dictionaries.push(dictionaryName);
    await this.setUserData(userId, userData)
    return {
      status: 'ok',
    }
  }

}

export const wordsService = new WordsService();