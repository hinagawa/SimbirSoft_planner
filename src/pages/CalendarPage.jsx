import React from "react";

import { Grid } from "@material-ui/core";

import ResponsiveDrawer from "../components/Sidebar";
import Search from "../components/Search";
import Calendar from "../components/Calendar";

export const CalendarPage = () => {
  const events = [
    {title: "Математика", date: "2021-06-01"},
    {title: "Физика", date: "2021-06-28"}
  ]

  // ----------------------------------------------------------- ФИЛЬТР ПРИМЕР ПОИСКА ---------------------
  // const [catalog, setCatalog] = useState([])
  // const [filteredCatalog, setFilteredCatalog] = useState([])

  const handleSearch = str => {
    //   setFilteredCatalog(
    //     catalog.filter(item =>
    //       item.strCategory.toLowerCase().includes(str.toLowerCase())
    //     )
    //   )
  }

  // --------------------------------------------------СТАРАЯ ИНФА -----------------------------
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
      <div className="mainPage">
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item xs={2}>
            <ResponsiveDrawer />
          </Grid>
          <Grid item xs={8}>
            <Search cb={handleSearch} />
          </Grid>
        </Grid>
        <Calendar events={events} />
      </div>
    </>
  );
}
