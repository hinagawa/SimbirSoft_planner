import firebase from "firebase"

import authService from "../services/authService"
export const CalendarPage = () => {
  const getUser = async () => {
    const id = "VJ3c3q2wJBTvp8wH40HxLA9hGN73"
    const data = await authService.getUserDataById()
    console.log(data)
  }

  return (
    <>
      <button onClick={getUser}>запрос по юзеру</button>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </>
  )
}
