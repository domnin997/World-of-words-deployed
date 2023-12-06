import localforage from 'localforage';

class WordsService {
  
  async getWords (userId) {
    const response = await localforage.getItem(userId);
    const output = response ? response : false;
    return output;
  }

  async addWord (userId, newWord) {
    const response = await localforage.getItem(userId);

    newWord.id = crypto.randomUUID();

    if (response) {
        response.push(newWord);
        localforage.setItem(userId, response);
        return true;
    } else {
        localforage.setItem(userId, [newWord]);
        return false;
    }
  }

  async deleteWord (userId, wordToDelete) {
    const response = await localforage.getItem(userId);

    const newWordsArray = response.filter((word) => {
      return word.id !== wordToDelete;
    })

    if (response) {
      localforage.setItem(userId, newWordsArray);
    }
  }

  clearDB (userId) {
    localforage.setItem(userId, []);
  }

//   async deleteWord (userId) {
    
//   }

}

export const wordsService = new WordsService();