import firebase from "firebase"
export const CalendarPage = () => {
  return <button onClick={() => firebase.auth().signOut()}>Sign out</button>
}
