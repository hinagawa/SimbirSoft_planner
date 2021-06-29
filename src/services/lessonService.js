import firebase from "firebase"

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
          .set({...data})
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
      return lessons
    } catch (error) {
      throw error
    }
  }
  const createFetchLessonById = async (data, id) => {
    try {
      const res =
        (await firebase
          .database()
          .ref(`/users/${id}/lessons`)
          .set({...data})
          .val()) || {}
      return res
    } catch (error) {
      throw error
    }
  }

  const lessonService = {
    getFetchCategoryById,
    createFetchCategoryById,
    getFetchLessonById,
    createFetchLessonById
  }

  export default lessonService;