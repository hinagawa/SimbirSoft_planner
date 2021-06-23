import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import firebase from "firebase/app"

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
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
