import React, { useCallback, useContext } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";

import { login } from "../redux/auth/authThunks";
import authService from "../services/authService"

import { AuthContext } from "../Context/auth";

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
  );
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
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export const SignIn = () => {

  const history = useHistory()
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    async event => {
      event.preventDefault()
      const { email, password } = event.target.elements
      try {
        await authService.login(email.value, password.value);
        history.push("/calendar")
      } catch (error) {
        alert(error)
      }
    },
    [history]
  );

  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/calendar" />
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
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
            Войти
          </Button>
        </form>
      </div>
      <Grid container>
        <Grid item>
          Нет аккаунта? &nbsp;
          <Link to="/signup" variant="body2">
            {"Создать аккаунт"}
          </Link>
        </Grid>
      </Grid>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default SignIn;