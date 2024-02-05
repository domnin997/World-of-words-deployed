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
    return output;
  }

  async setUserData (userId, userData) {
    localforage.setItem(userId, userData);
  }

  async getUserWords (userId, entityId) {
    const userData = await this.getUserData(userId)
    const words = userData.words.filter((word) => {
      return word.dictionaryId === entityId;
    })
    return words;
  }

  async addUserWord (userId, newWord) {
    const userData = await this.getUserData(userId)
    userData.words.push(newWord)
    await this.setUserData(userId, userData)
  }

  async deleteUserWord (userId, wordId) {
    const userData = await this.getUserData(userId)
    const updWordsArray = userData.words.filter((word) => {
      return word.id !== wordId
    })
    userData.words = updWordsArray
    await this.setUserData(userId, userData)
  }

  async getUserDictionaries (userId) {
    const userData = await this.getUserData(userId)
    const dictionaries = userData.dictionaries
    return {
      status: 'ok',
      dictionaries
    };
  }

  async getUserDictionary (userId, dictionaryId) {
    const userData = await this.getUserData(userId)
    const dictionary = userData.dictionaries.filter((dictionary) => {
      return dictionary.id === dictionaryId;
    })
    return dictionary[0];
  }

  async addUserDictionary (userId, dictionaryName) {
    const userData = await this.getUserData(userId)
    const dictionaryInfo = {...dictionaryName, id: crypto.randomUUID()}
    userData.dictionaries.push(dictionaryInfo)
    await this.setUserData(userId, userData)
    return {
      status: 'ok',
    }
  }

  async amendUserDictionary (userId, dictionaryData) {
    const userData = await this.getUserData(userId)
    const dictionaryIndex = userData.dictionaries.findIndex((dictionary) => {
      return dictionary.id === dictionaryData.id
    })
    const amendedDictionary = {
      ...userData.dictionaries[dictionaryIndex],
      ...dictionaryData
    }
    console.log(dictionaryIndex, amendedDictionary)
  }

  async deleteUserDictionary (userId, dictionaryId) {
    let userData = await this.getUserData(userId)
    const dictionaries = userData.dictionaries
    const updatedDictionaries = dictionaries.filter((dictionary) => {
      return dictionary.id !== dictionaryId
    })
    userData.dictionaries = [...updatedDictionaries];
    await this.setUserData(userId, userData);
  }

}

export const wordsService = new WordsService();