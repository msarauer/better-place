import React, {useState}from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddReview from './AddReview';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  root: {
  
  },
  button: {
    marginLeft: '85px',
    margin: 'auto',
    color: '#716bcc',
    '&:hover': {
      color:'#5ae2b5',
      background: '#f5f6fa'
    }
  }
}));



const ReviewMod = ({token, setToken, opportunities, opportunity, city, completedOpportunities})  => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // console.log("OppsID in REVIEWMOD", opportunityId)
  return (
    <div>
      <Button className={classes.button} onClick={handleClickOpen}>
       <AddCircleIcon/> Add Review
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <AddReview open={open} setOpen={setOpen} handleClose={handleClose} city={city} token={token} setToken={setToken} opportunity={opportunity} opportunities={opportunities} completedOpportunities={completedOpportunities} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ReviewMod