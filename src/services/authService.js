import firebase from "firebase"

const login = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password)
  } catch (error) {
    throw error
  }
}

const register = async (email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
  } catch (error) {
    throw error
  }
}

const authService = {
  login,
  register
}

export default authService
