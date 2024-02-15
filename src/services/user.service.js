import localforage from 'localforage'

const DB = 'USER_DB'

class UserService {
  async tryRegister ({identifier, password}) {
    const response = await localforage.getItem(`${DB}${identifier}`)
    if (!response) {
      await localforage.setItem(`${DB}${identifier}`, {
        token: crypto.randomUUID(),
        name: identifier,
        password,
      })
      return {
        isRegistered: true
      }
    } else {
      return {
        isRegistered: false,
        reason: 'Имя занято'
      }
    }
  }
  async tryAuth ({identifier, password}) {
    const response = await localforage.getItem(`${DB}${identifier}`)
    if (!response) {
      return {
        status: false,
        reason: 'Пользователь не найден'
      }
    } else if (response.password === password) {
      return {
        status: true,
        userData: {
          token: response.token,
          name: response.name
        }
      }
    } else if (response.password !== password) {
      return {
        status: false,
        reason: 'Неверный пароль'
      }
    }
  }
}
export const userService = new UserService;
export default UserService;