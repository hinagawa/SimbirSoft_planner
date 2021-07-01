import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createLesson } from '../../redux/lesson/lessonThunk';

function getModalStyle() {

  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});

class AddLessonModel extends React.Component {
  state = {
    open: false,
    category: '',
    description: '',
    status: 'wait',
    date: "2021-07-02",
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name] : value})
  };
  // const mapDispatchToProps = (dispatch, ownProps) => {
  //   return {
  //     toggleTodo: () => dispatch(toggleTodo(ownProps.todoId))
  //   }
  // }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(createLesson({ category: this.state.category, description: this.state.description, date: this.state.date, status: "visited"}, this.props.uid))
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button variant="contained" size="large" color="primary" onClick={this.handleOpen} style={{ "margin": "10px 0px 10px 55px" }}>Добавить</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              Добавьте название категории
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              <form className={classes.root} noValidate autoComplete="off" style={{ "display": "flex", "flex-direction": "column" }} onSubmit={this.onSubmit}>
              <br/>
                <TextField id="standard-basic" placeholder="category" value={this.state.category} onChange={this.handleChange} name="category" />
                <br/>
                <TextField id="standard-basic" placeholder="description" value={this.state.description} onChange={this.handleChange} name="description" />
                <br/>
                <TextField
                  id="date"
                  label="Date"
                  name="date"
                  type="date"
                  value={this.state.date}
                  className={classes.textField}
                  onChange={this.handleChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Button variant="contained" size="large" color="primary" type="submit" style={{ "margin-top": "10px" }}>Добавить</Button>
              </form>
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }
}

AddLessonModel.propTypes = {
  classes: PropTypes.object.isRequired,
};

const AddLessonModelWrapper = withStyles(styles)(AddLessonModel);

export default AddLessonModelWrapper;