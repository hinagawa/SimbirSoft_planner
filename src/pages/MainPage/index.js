import { Grid } from "@material-ui/core";
import ResponsiveDrawer from "../../components/Sidebar";
import React from "react";
import Search from "../../components/Search";

export const MainPage = () => {

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
    </div>
  )
};

export default MainPage;
