import React, { useState } from "react";
import { Paper, FormControl, InputLabel, Select, MenuItem, Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    marginBottom: "5px",
    width: "100%",
    marginRight:"5px"
  },
}));

const Filterbar = () => {
  const classes = useStyles();
  const [filter, setFilter ] = useState("Date: soonest first");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };


  return (

      <Paper elevation={0} className={classes.paper}>
      <FormControl variant="outlined"  className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Filter</InputLabel>
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
          <MenuItem value={"Date: soonest first"}>Date: soonest first</MenuItem>
          <MenuItem value={"Date: latest first"}>Date: latest first</MenuItem>
          <MenuItem value={"Time Commitment: shortest first"}>Time Commitment: shortest first</MenuItem>
          <MenuItem value={"Time Commitment: longest first"}>Time Commitment: longest first</MenuItem>
          <MenuItem value={"Distance: nearest first"}>Distance: nearest first</MenuItem>
          <MenuItem value={"Host rating: highest first"}>Host rating: highest first</MenuItem>

        </Select>
      </FormControl>
      <Divider/>
      </Paper>

  );
};

export default Filterbar;
