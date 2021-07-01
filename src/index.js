import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import firebase from "firebase/app"
import "firebase/auth"
import { Provider } from "react-redux"
import { store } from "./redux/store"

const firebaseConfig = {
  apiKey: "AIzaSyD80SoDcAS1kIvf_6w4VzutdTgG_yksoWs",
  authDomain: "simbirsoft-planner.firebaseapp.com",
  databaseURL: "https://simbirsoft-planner-default-rtdb.firebaseio.com",
  projectId: "simbirsoft-planner",
  storageBucket: "simbirsoft-planner.appspot.com",
  messagingSenderId: "5834253606",
  appId: "1:5834253606:web:ecf024d4f1cbfe15bd8de7"
}

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);