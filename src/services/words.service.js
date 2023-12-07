import localforage from 'localforage';

class WordsService {
  
  // async initDB () {
  //   const response = await localforage.getItem(DB);
  //   if (!response) {
  //     localforage.setItem(DB, {});
  //   }
  // }

  async getWords (userId) {
    const response = await localforage.getItem(userId);
    const output = response ? response : false;
    return output;
  }

  async addWord (userId, newWord) {
    const words = await this.getWords(userId);

    newWord.id = crypto.randomUUID();
    console.log(words)

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

}

export const wordsService = new WordsService();