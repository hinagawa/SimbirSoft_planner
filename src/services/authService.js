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

// -------------Запросы на категории: ---------------

const getFetchCategoryById = async id => {
  try {
    const res = await firebase
      .database()
      .ref(`/users/${id}/categories`)
      .once("value")
    const categories = res.val() || {}
    return categories
  } catch (error) {
    throw error
  }
}
const createFetchCategoryById = async (data, id) => {
  try {
    const res =
      (await firebase
        .database()
        .ref(`/users/${id}/categories`)
        .set(data)
        .val()) || {}
    return res
  } catch (error) {
    throw error
  }
}

// ----------- Запросы на занятии -------------
const getFetchLessonById = async id => {
  try {
    const res = await firebase
      .database()
      .ref(`/users/${id}/lessons`)
      .once("value")
    const lessons = res.val() || {}
    return Object.keys(lessons).map(key => ({
      ...lessons[key],
      id: key
    }))
  } catch (error) {
    throw error
  }
}
const createFetchLessonById = async (
  {category, description, date, status},
  id
) => {
  try {
    const res = await firebase
      .database()
      .ref(`/users/${id}/lessons`)
      .push({category, description, date, status})
    return {category, description, date, status, id: res.key}
  } catch (error) {
    throw error
  }
}

const authService = {
  login,
  register,
  setUserDataById,
  getUserDataById,
  getFetchCategoryById,
  createFetchCategoryById,
  getFetchLessonById,
  createFetchLessonById
}

export default authService
