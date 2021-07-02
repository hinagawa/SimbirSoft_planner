import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Redirect } from "react-router-dom";

import firebase from 'firebase';

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Chip, Avatar } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';

import { deleteCategory } from '../../redux/lesson/lessonThunk';
import { AuthContext } from '../../Context/auth';
import AddLessonModel from '../AddLessonModel';
import lessonService from '../../services/lessonService';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {

  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = useState('');
  const history = useHistory();

  const handleClickOpen = (text) => {
    setOpen(true);
    setCategory(text)
  };;

  const handleClose = () => {
    setOpen(false);
  };

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const categories = useSelector((state) => state.lessonReducer.category);
  const lessons = useSelector(state => state.lessonReducer.lessons);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const { currentUser } = useContext(AuthContext);
  const uid = currentUser ? currentUser.uid : null;
  const dispatch = useDispatch();

  const deleteText = () => {
    dispatch(deleteCategory(category));
    lessons.forEach((lesson) => {
      if(lesson.category === category) {
        lessonService.deleteLesson(uid, lesson.id);
      }
    })
    setOpen(false);
  }
  function signOut() {
    firebase.auth().signOut();
  }
  if (!currentUser) {
    return <Redirect to="/" />
  }
  const drawer = (
    <div>
      <AddLessonModel uid={uid} dispatch={dispatch} />
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {categories ? categories.map((text, index) => (
          <ListItem button key={text}>
            <Chip variant="outlined" color="primary" onDelete={() => handleClickOpen(text)} avatar={<Avatar>{text[0]}</Avatar>} label={text} />
          </ListItem>
        )) : <ListItem>Нет занятий</ListItem>}
      </List>
      <Button onClick={signOut} color="primary" >
        Выйти
      </Button>
    </div >
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Вы действительно хотите удалить данную категорию? Все занятия также будут удалены.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteText} color="primary">
            Да
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Нет
          </Button>
        </DialogActions>
      </Dialog>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
