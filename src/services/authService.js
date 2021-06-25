import firebase from "firebase";

const login = (email, password) => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(error => console.log(error))
};

const register = (email, password) => {
    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(error => console.log(error))
}

const authService = {
    login,
    register,
};

export default authService;
