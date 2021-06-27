import { Grid } from "@material-ui/core";
import ResponsiveDrawer from "../../components/Sidebar";
import React from "react";
import Search from "../../components/Search";
import Calendar from "../../components/Calendar";

export const MainPage = () => {
  const events = [
    { title: 'Математика', date: '2021-06-01' },
    { title: 'Физика', date: '2021-06-28' }
  ];
  return (
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
  )
};

export default MainPage;
