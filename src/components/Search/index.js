import React, {useState} from "react"
import PropTypes from "prop-types"
import {withStyles} from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import {useSelector} from "react-redux"
const styles = {
  root: {
    margin: "16px 107px 37px 107px",

    display: "flex",
    alignItems: "center"
  },
  input: {
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
}

function Search(props) {
  const {classes, cb = Function.prototype} = props

  const [value, setValue] = useState("")
  const res = useSelector(state => state.lessonReducer.lessons)

  const handleKey = e => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }
  const handleSearch = () => {
    cb(value)
  }
  return (
    <div className="container">
      <Paper className={classes.root} elevation={1}>
        <Autocomplete
          id="combo-box-demo"
          className={classes.input}
          options={res}
          getOptionLabel={option => `${option.category} ${option.date}`}
          renderInput={params => (
            <TextField
              {...params}
              onChange={e => setValue(e.target.value)}
              onKeyDown={handleKey}
              value={value}
              label="ПОИСК"
              variant="outlined"
            />
          )}
        />
        <IconButton
          onClick={handleSearch}
          className={classes.iconButton}
          aria-label="Search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  )
}

Search.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Search)
