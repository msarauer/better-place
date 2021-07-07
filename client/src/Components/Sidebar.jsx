<<<<<<< HEAD

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import OpportunityList from './OpportunityList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function PermanentDrawerLeft({
  lat,
  lng,
  city,
  token,
  category,
  location,
  opportunities,
  setOpportunities,
  setRows,
  rows 
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
            <OpportunityList rows={rows} setRows={setRows} lat={lat} lng={lng} token={token} opportunities={opportunities} setOpportunities={setOpportunities} location={city} category={category} />

      </main>
    </div>
  );
}
=======
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider'
import Slider from '@material-ui/core/Slider';
import CategoryIcon from '@material-ui/icons/Category';
import TimerIcon from '@material-ui/icons/Timer';
import TextField from '@material-ui/core/TextField';
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


  const timeArray = ["Quick (Minutes)", "Short (3 hours or less)", "Medium (8 hours or less)", "Long (Full day)", "Extra Long (Multiple days)"];

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
          defaultValue={70}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={2}
          marks
          min={2}
          max={80}
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


>>>>>>> 7c822a8eb901de7b325d19323306b68ec7b5fa9e
