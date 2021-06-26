import React from "react"
import SignInForm from "../../components/SignInForm"
import Grid from "@material-ui/core/Grid"
import {Link} from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://github.com/AekoArray/SimbirSoft_planner"
      >
        Планировщик занятий
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}
export const AuthPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <SignInForm />
      <Grid container>
        <Grid item>
          Нет аккаунта? &nbsp;
          <Link to="/signup" variant="body2">
            {"Зарегистрироваться"}
          </Link>
        </Grid>
      </Grid>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default AuthPage
