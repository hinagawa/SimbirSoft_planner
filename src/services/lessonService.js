import firebase from "firebase"

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

const lessonService = {
  getFetchLessonById,
  createFetchLessonById
}

export default lessonService
