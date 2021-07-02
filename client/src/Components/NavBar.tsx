import React from 'react'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import  Grid from '@material-ui/core/Grid'
import betterplace from '../resources/better-place.png';
import { makeStyles, createStyles, fade, Theme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase'
import SearchBar from 'material-ui-search-bar';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(90deg, rgba(0,153,255,1) 20%, rgba(26,188,156,1)98%)'
  },
  text: {
    color: "#FFFFFF"
  },
  search: {
    width: "500px"
  }
})

interface Props {
  
}


const NavBar = (props: Props) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.root}>
        <ToolBar>
         <Typography variant="h6"><img src={betterplace} /></Typography>
         <SearchBar className={classes.search} placeholder="Search for location...">
         </SearchBar>
          <Grid container justify="flex-end" justify-content="space-between">
          <IconButton>
            <Typography className={classes.text}>Categories</Typography>
            <MenuIcon className={classes.text} />
          </IconButton>
        
          <Button className={classes.text} >Login</Button>
          </Grid>
        </ToolBar>
      </AppBar>
    </div>
  )
}

export default NavBar
