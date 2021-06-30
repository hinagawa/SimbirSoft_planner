// import firebase from "firebase"
// import {AuthContext} from "../Context/auth"
// import {useContext} from "react"
// import authService from "../services/authService"
import { Grid } from "@material-ui/core";
import ResponsiveDrawer from "../components/Sidebar";
import React from "react";
import Search from "../components/Search";
import Calendar from "../components/Calendar";

export const CalendarPage = () => {
  const events = [
    { title: 'Математика', date: '2021-06-01' },
    { title: 'Физика', date: '2021-06-28' }
  ];

  // const {currentUser} = useContext(AuthContext)
  // const uid = currentUser ? currentUser.uid : null

  // const getUser = async () => {
  //   const data = await authService.getUserDataById()
  //   console.log(data)
  // }
  // const createLessons = async () => {
  //   const obj = {
  //     category: "Мdsfadfasdатематика",
  //     date: +new Date(),
  //     description: "fsl kdms",
  //     status: "visited"
  //   }
  //   const data = await authService.createFetchLessonById(obj, uid)
  //   console.log(data)
  // }

  // const getLessons = async () => {
  //   const res = await authService.getFetchLessonById(uid)
  //   console.log(res)
  // }

  return (
    <>
      {/* <button onClick={getUser}>запрос по юзеру</button>
      <button onClick={createLessons}>create по юзеру</button>
      <button onClick={getLessons}>get по юзеру</button>
      <button onClick={() => firebase.auth().signOut()}>Sign out</button> */}
      <div className="mainPage">
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        <Grid item>
            <ResponsiveDrawer />
        </Grid>
        <Grid item xs>
            <Search />
        </Grid>
      </Grid>
      <Calendar  events = {events}/>
    </div>
      
    </>
  )
}
