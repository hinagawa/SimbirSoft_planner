import firebase from "firebase"
import {AuthContext} from "../Context/Auth"
import {useContext} from "react"
import authService from "../services/authService"

export const CalendarPage = () => {
  const {currentUser} = useContext(AuthContext)
  const uid = currentUser ? currentUser.uid : null

  const getUser = async () => {
    const data = await authService.getUserDataById()
    console.log(data)
  }
  const createLessons = async () => {
    const obj = {
      category: "Мdsfadfasdатематика",
      date: +new Date(),
      description: "fsl kdms",
      status: "visited"
    }
    const data = await authService.createFetchLessonById(obj, uid)
    console.log(data)
  }

  const getLessons = async () => {
    const res = await authService.getFetchLessonById(uid)
    console.log(res)
  }

  return (
    <>
      <button onClick={getUser}>запрос по юзеру</button>
      <button onClick={createLessons}>create по юзеру</button>
      <button onClick={getLessons}>get по юзеру</button>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
    </>
  )
}
