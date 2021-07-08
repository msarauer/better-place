import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import GradeIcon from '@material-ui/icons/Grade';
import Rating from '@material-ui/lab/Rating';
import axios from "axios"
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles({
  root: {
    // width: '80%',
    display: 'flex',
  },
  field: {
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    maxLength:"225"
  },
  rating: {
    
  }
})


const AddReview = ({token, setToken, opportunities, opportunity, city, completedOpportunities, open, setOpen, handleClose}) => {
  const classes = useStyles();

const [userFeedback, setUserFeedback] = useState("")
const [rating, setRating] = useState("Rating")
const [reviews, setReviews] = useState([]);



const handleSubmitReview = (e) => {
  e.preventDefault();
  const userSave = (data) => {
    axios
      .post(`/api/reviews`, data)
      .then((data) => {
      })
      .catch((e) => {
        console.log("post error:", e.message);
      });
  };

  const saveData = {
    user_id: token.id,
    opportunity_id: opportunity.opportunity_id,
    user_feedback: userFeedback,
    rating
    
  };
  setOpen(false)
  userSave(saveData);
};


return (
  <div>
    <form action="">
      
            <div>
            <TextField 
              style={{width: '100%'}}
              onChange={(e) => setUserFeedback(e.target.value)}
              className={classes.field}
              multiline={true}
              rows={4}
              name="Description"
              label="Review"
              placeholder="Please leave your comment here..."
              autoComplete="off"
              variant="outlined"
              // error={titleError}
              value={userFeedback}
              inputProps={{maxLength: 225}}
            />
            </div>

              <div>
                <Rating 
                  className={classes.rating}
                  value={rating} 
                  onChange={(e) => setRating(e.target.value)} 
                  name="size-large" 
                  defaultValue={2} 
                  size="large" 
                />
              </div>


              <div>
                <Button onClick={handleClose} color="primary">Cancel</Button>
                
                <Button 
                  type="submit" 
                  onClick={handleSubmitReview}
                  color="primary"
                  >Submit
                </Button>
              </div>
    </form>
  </div>
);



}






export default AddReview