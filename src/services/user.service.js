import localforage from 'localforage';

class UserService {
  
  setUser (userData) {
    localforage.setItem(userData.login, {password: userData.password});
  }

  async getUser(login) {
    return await localforage.getItem(login);
  }
  // Запрос к базе данных. Если нет, то создаем. Если есть, то ошибку.
  async register (userData) {
    
    if (await this.getUser(userData.login)) {
      return 'Имя занято';
    } else {
      this.setUser(userData);
      return 'Регистрация прошла успешно!';
    }
  }

  async authorise (userData) {
    const user = await this.getUser(userData.login);
    
    if (user) {
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