import React, { useState, useEffect} from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Review from './Review';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);



export default function Reviews() {
  const classes = useStyles();

  const host_id = 3;

  const [ userReviews, setUserReviews ] = useState([])

  useEffect(() => {
    console.log('get request executed')
    axios.get(`/api/review/${host_id}`)
    .then((data) => {
      const reviewArr = data.data.reviews
      setUserReviews([...reviewArr])
    })
    .catch((e) => (console.log(e.message)))
  }, [])



  return (

      <List className={classes.root}>
      <Typography>Reviews for {userReviews.length > 0 && userReviews[0].host_name}</Typography>
        {userReviews.map((review) => { 
          return <Review key={ review.id } feedback={review.user_feedback} rating={review.rating} user={review.user_name} avatar={review.avatar}/>})}
      </List>

  );
}