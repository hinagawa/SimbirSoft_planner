import firebase from "firebase"

// -------- АВТОРИЗАЦИЯ/РЕГИСТРАЦИЯ ---------------
const login = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)
  } catch (error) {
    throw error
  }
}

const register = async ({email, password}) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
  } catch (error) {
    throw error
  }
}

//------- ЗАПРОСЫ ПО ЮЗЕРУ  --------------

// Установка
const setUserDataById = async (userData, id) => {
  await firebase
    .database()
    .ref(`/users/${id}/info`)
    .set({
      ...userData,
      id
    })
}

// Получение юзера
const getUserDataById = async id => {
  try {
    // Если нужен запрос по id, то добавьте в url:    ${id}/info
    const res = await firebase.database().ref(`/users/`).once("value")
    const user = res.val()
    return user
  } catch (error) {
    console.log(error.message)
    throw error
  }
}

const authService = {
  login,
  register,
  setUserDataById,
  getUserDataById,
}

export default authService
