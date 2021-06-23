import firebase from "firebase"
import {useEffect, useState} from "react"
export const Authentication = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = e => {
    e.preventDefault()

    // ------------- СОЗДАТЬ нового пользователя --------------
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => console.log(error))

    // ------------- ВХОД авторизованного человека -----------
    //  firebase
    //    .auth()
    //    .signInWithEmailAndPassword(email, password)
    //    .catch(error => console.log(error))
  }

  useEffect(() => {
    const db = firebase.database()
    console.log(db)
  }, [])
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          id="email"
          placeholder="почта"
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          id="password"
          placeholder="пароль"
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">submit</button>
      </form>
    </>
  )
}
