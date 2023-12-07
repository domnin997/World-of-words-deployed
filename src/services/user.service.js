import localforage from 'localforage';

const DB = 'USER_DB';

class UserService {
  
  async reg ({login, password}) {
    const response = await localforage.getItem(login);

    if (!response) {
      localforage.setItem(login, {
        password,
        id: crypto.randomUUID(),
      })
      return {status: true, body: 'Регистрация успешна'}
    } else {
      return {status: false, body: 'Имя занято'}
    }
  }

  async auth ({login, password}) {
    const response = await localforage.getItem(login);
    
    if (!response) {
      return {status: false, body: 'Пользователь не найден'}
    } else if (response.password === password) {
      return {status: true, body: `Успешно`, id: response.id}
    } else if (response.password !== password) {
      return {status: false, body: 'Неверный пароль'}
    }
  }

  setUser (userData) {
    localforage.setItem(DB[userData.login], {password: userData.password});
  }

  async getUser(login) {
    return await localforage.getItem(DB.login);
  }
  // Запрос к базе данных. Если нет, то создаем. Если есть, то ошибку.
  async register (userData) {
    
    if (await this.getUser(DB[userData.login])) {
      return 'Имя занято';
    } else {
      this.setUser(userData);
      return 'Регистрация прошла успешно!';
    }
  }

  async authorise (userData) {
    
    const user = await this.getUser(userData.login);
    
    if (user) {
      console.log(user);
      if (user.password === userData.password) {
        return {status: true, message: 'Вход выполнен'};
      } else {
        return {status: false, message: 'Неверный пароль'};
      }
    } else {
      return {status: false, message: 'Аккаунт не найден'};
    }

  }  

}

export default UserService;