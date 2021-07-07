import React, { useState } from "react";
import {
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import "./NewButton.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    marginBottom: "5px",
    width: "100%",
    marginRight: "5px",
  },
}));

const Filterbar = ({ handleClickOpen, host_id }) => {
  const classes = useStyles();
  const [filter, setFilter] = useState("Date: soonest first");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Paper elevation={0} className={classes.paper}>
      <div className="row">
        <div className="col-6 text-left align-self-end">
          <span>&nbsp;&nbsp;&nbsp;Showing 1-40 of 308</span>
        </div>
        <div className="col-6">
          <div className="row">
          <div className="col-5 text-right align-self-center new-button">
            <div className="addNewButton">
              {host_id && (
                <Button
                  // variant="contained"
                  
                  onClick={handleClickOpen}
                  color="primary"
                  endIcon={<Icon>add_circle</Icon>}
                >
                  Add new
                </Button>
              )}
            </div>
          </div>
          <div className="col-7 text-left align-self-center">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                Filter
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={filter}
                onChange={handleChange}
                label="Sort"
                autoWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Date: soonest first"}>
                  Date: soonest first
                </MenuItem>
                <MenuItem value={"Date: latest first"}>
                  Date: latest first
                </MenuItem>
                <MenuItem value={"Time Commitment: shortest first"}>
                  Time Commitment: shortest first
                </MenuItem>
                <MenuItem value={"Time Commitment: longest first"}>
                  Time Commitment: longest first
                </MenuItem>
                <MenuItem value={"Distance: nearest first"}>
                  Distance: nearest first
                </MenuItem>
                <MenuItem value={"Host rating: highest first"}>
                  Host rating: highest first
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Filterbar;
