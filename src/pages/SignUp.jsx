import React from "react";
// import {Link} from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {useCallback, useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import {makeStyles} from "@material-ui/core/styles";
import authService from "../services/authService";
import {AuthContext} from "../Context/auth";
import {useEffect} from "react";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <a color="inherit" href="https://github.com/AekoArray/SimbirSoft_planner">
        Планировщик занятий
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))
export const SignUp = () => {
  const [userData, setUserData] = useState(null)
  const history = useHistory()
  const {currentUser} = useContext(AuthContext)

  const handleSignUp = useCallback(
    async event => {
      event.preventDefault()
      // const data = event.target.elements
      const {email, password, userName} = event.target.elements
      try {
        const serviceParams = {
          email: email.value,
          password: password.value,
          name: userName.value
        }
        setUserData(serviceParams)
        await authService.register(serviceParams)

        history.push("/calendar")
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )
  const uid = currentUser ? currentUser.uid : null
  useEffect(() => {
    if (uid) {
      console.log(uid)
      async function fetchUserById() {
        await authService.setUserDataById(userData, uid)
      }
      fetchUserById()
    }
  }, [uid])

  const classes = useStyles()
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Зарегистрироваться
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSignUp}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Почта"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userName"
            label="Имя пользователя"
            name="userName"
            autoComplete="login"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Зарегистрироваться
          </Button>
        </form>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default SignUp