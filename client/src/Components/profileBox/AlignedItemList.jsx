import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { getCompletedOpportunities } from "../../helpers/filters-and-sorters";
import AddReview from "./AddReview"
import ReviewMod from "./ReviewMod"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "86.5%",
    maxWidth: "60ch",
    // minHeight: "29%",
    // maxHeight: "29%",
    maxHeight: "260px",
    overflow: "auto",
    marginTop: "-8px",

    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList({ token, setToken, opportunities }) {
  const classes = useStyles();
  const [completedOpportunities, setCompletedOpportunities] = useState([]);

  useEffect(() => {
    axios
      .put(`/api/users_opportunities/${token.email}`)
      .then((data) => {
        setCompletedOpportunities(getCompletedOpportunities(data.data.opportunities));
      })
      .catch((e) => {
        console.log("axiosError:", e);
      });
  }, [token]);

  
  return (
    <>
      <List className={classes.root}>
        {completedOpportunities.map((opportunity) => (
          <ListItem key={token.id}alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={opportunity.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={opportunity.opportunity_name}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {opportunity.username}
                  </Typography>
                  {` — ${opportunity.description}`}
                  <ReviewMod token={token} setToken={setToken} opportunites={opportunities}/>
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
