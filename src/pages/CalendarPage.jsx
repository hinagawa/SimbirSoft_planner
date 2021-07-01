import React from "react";
import { useSelector } from "react-redux";

import { Grid } from "@material-ui/core";

import ResponsiveDrawer from "../components/Sidebar";
import Search from "../components/Search";
import Calendar from "../components/Calendar";

export const CalendarPage = () => {
  const events = useSelector((state) => state.lessonReducer.lessons);
  console.log(events);
  // const events = [
  //   {title: "Математика", date: "2021-06-01"},
  //   {title: "Физика", date: "2021-06-28"}
  // ];
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
            <Search  />
          </Grid>
        </Grid>
        <Calendar events={events} />
      </div>
    </>
  );
}
