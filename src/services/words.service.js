import localforage from 'localforage'

class WordsService {
  clearDB (userId) {
    localforage.setItem(userId, [])
  }
  // Инструменты для обновленной структуры БД

  async getUserData (userId) {
    const userData = await localforage.getItem(userId)
    const output = userData ? userData : {dictionaries: [], words: []}
    return output
  }

  async setUserData (userId, userData) {
    localforage.setItem(userId, userData)
  }

  async getUserWords (userId, entityId) {
    const userData = await this.getUserData(userId)
    const words = userData.words.filter((word) => {
      return word.dictionaryId === entityId
    })
    return words
  }

  async getUserWord (userId, wordId) {
    const userData = await this.getUserData(userId)
    const index = userData.words.findIndex((word) => {
      return word.id === wordId
    })
    return userData.words[index]
  }

  async addUserWord (userId, newWord) {
    const userData = await this.getUserData(userId)
    userData.words.push(newWord)
    await this.setUserData(userId, userData)
  }

  async amendUserWord (userId, wordData) {
    const userData = await this.getUserData(userId)
    const wordIndex = userData.words.findIndex((word) => {
      return word.id === wordData.id
    })
    const updatedWord = {
      ...userData.words[wordIndex],
      ...wordData
    }
    userData.words.splice(wordIndex, 1, updatedWord)
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
    }
  }

  async getUserDictionary (userId, dictionaryId) {
    const userData = await this.getUserData(userId)
    const dictionary = userData.dictionaries.filter((dictionary) => {
      return dictionary.id === dictionaryId
    })
    return dictionary[0]
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
    userData.dictionaries.splice(dictionaryIndex, 1, amendedDictionary)
    await this.setUserData(userId, userData)
  }

  async deleteUserDictionary (userId, dictionaryId) {
    let userData = await this.getUserData(userId)
    const dictionaries = userData.dictionaries
    const updatedDictionaries = dictionaries.filter((dictionary) => {
      return dictionary.id !== dictionaryId
    })
    const wordsArray = userData.words.filter((word) => {
      return word.dictionaryId !== dictionaryId
    })
    userData.dictionaries = [...updatedDictionaries]
    userData.words = wordsArray
    await this.setUserData(userId, userData)
  }
}

export const wordsService = new WordsService();