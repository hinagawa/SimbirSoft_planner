import firebase from "firebase";

async function login(email, password) {
    return await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
            return data.user.email
        })
        .catch((error) => {
            throw error;
        })
}

async function register(email, password) {
    return await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
            return data.user.email
        })
        .catch((error) => {
            throw error;
        })
}

const authService = {
    login,
    register,
};

export default authService;
