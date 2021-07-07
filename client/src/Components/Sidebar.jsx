import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import CategoryIcon from '@material-ui/icons/Category';
import TimerIcon from '@material-ui/icons/Timer';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import { rowFilter } from '../helpers/filters-and-sorters';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  sliderDiv: {
    width: '70%',
    alignItems:"center"
  },

}));

export default function Sidebar({ distance, setDistance, timeCommitment, categoryFromApp, search, setSearch, categories, rows, setCategory, handleClick, setTimeCommitment }) {
  const classes = useStyles();
  const [openCat, setOpenCat] = useState(true);
  const [openTime, setOpenTime] = useState(true);

  const onChangeHandler = (e) => {
    e.preventDefault()
    setSearch(e.target.value);
    console.log(search)
  }

  const handleClickCat = () => {
    setOpenCat(!openCat);
  };
  const handleClickTime = () => {
    setOpenTime(!openTime);
  };

  function valuetext(value) {
    return `${value}`;
  }


  const timeArray = ["Quick (Minutes)", "Short (3 hours or less)", "Medium (8 hours or less)", "Long (Full day)", "Extra Long (Muliple days)"];

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Current Items: <strong>{rows.length}</strong> <Divider />
        </ListSubheader>
        
      }
      className={classes.root}
    >
      <ListSubheader id="discrete-slider" gutterBottom>
        Distance ({distance / 1000} km)
      </ListSubheader>
      <ListItem className="sliderDiv">
        <Slider
          defaultValue={20}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={20}
          marks
          min={0}
          max={20}
          className={classes.sliderDiv}
          onChange={(e, v) => setDistance(v * 1000)}
          value={distance / 1000}
        />
        
        </ListItem>
        <Divider />
      <ListItem button onClick={handleClickCat}>
        <ListItemIcon>
          <CategoryIcon />
        </ListItemIcon>
        <ListItemText primary="Categories" />
        {openCat ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openCat} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {categories && categories.map((category)=> {
    return (
      <ListItem button onClick={() => {
        handleClick(category.id)}} className={classes.nested}>
      <ListItemIcon>
        {category.id === categoryFromApp ? <StarIcon/> : <StarBorder />}
      </ListItemIcon>
      <ListItemText primary={category.name} />
    </ListItem>
    )
  })}
        </List>
      </Collapse>
      <Divider />
      <ListItem button onClick={handleClickTime}>
        <ListItemIcon>
          <TimerIcon />
        </ListItemIcon>
        <ListItemText primary="Time Commitment" />
        {openTime ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openTime} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {timeArray.map((time) => {
            return (
              <ListItem button onClick={() => setTimeCommitment((prev) => time)} className={classes.nested}>
            <ListItemIcon>
              {time === timeCommitment ? <StarIcon/> : <StarBorder />}
            </ListItemIcon>
            <ListItemText primary={time} />
          </ListItem>
            )
          })}
          
        </List>
      </Collapse>

      <Divider />
      <ListSubheader component="div" id="nested-list-subheader">
          Search by description:
        </ListSubheader>
      <ListItem>   
        <form onSubmit={e => e.preventDefault()} className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic"  onChange={e => onChangeHandler(e)} label="Keyword" variant="outlined" helperText="Enter keyword"/>
        </form>
        </ListItem>
    </List>
  );
}

//SortBY: Distance, Category, Time_commitment(dropdown), date, search(keywords)


