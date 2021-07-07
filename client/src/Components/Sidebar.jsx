import React from 'react';
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

export default function NestedList() {
  const classes = useStyles();
  const [openCat, setOpenCat] = React.useState(true);
  const [openTime, setOpenTime] = React.useState(true);
  const [distance, setDistance] = React.useState(30);


  const handleClickCat = () => {
    setOpenCat(!openCat);
  };
  const handleClickTime = () => {
    setOpenTime(!openTime);
  };

  function valuetext(value) {
    return `${value}`;
  }
  

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Current Items: <strong>345</strong> <Divider />
        </ListSubheader>
        
      }
      className={classes.root}
    >
      <ListSubheader id="discrete-slider" gutterBottom>
        Distance ({distance} km)
      </ListSubheader>
      <ListItem className="sliderDiv">
        <Slider
          defaultValue={30}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={5}
          marks
          min={5}
          max={55}
          className={classes.sliderDiv}
          onChange={(e, v) => setDistance(v)}
          value={distance}
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
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Category 1" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Category 2" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Category 3" />
          </ListItem>
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
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Short" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Medium" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Long" />
          </ListItem>
        </List>
      </Collapse>

      <Divider />
      <ListSubheader component="div" id="nested-list-subheader">
          Search by description:
        </ListSubheader>
      <ListItem>   
        <form className={classes.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Keyword" variant="outlined" helperText="Enter keyword"/>
        </form>
        </ListItem>
    </List>
  );
}

//SortBY: Distance, Category, Time_commitment(dropdown), date, search(keywords)