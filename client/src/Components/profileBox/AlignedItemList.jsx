import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "60ch",
    maxHeight: 245,
    overflow: "auto",
    marginTop: "-25px",

    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList({token}) {
  const classes = useStyles();
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/users_opportunities/${token}`)
      .then((data) => {
        setOpportunities(data.data.opportunities);
      })
      .catch((e) => {
        console.log("axiosError:", e);
      });
  }, [token]);


  return (
    <>
      <List className={classes.root}>
        {opportunities.map((opportunity) => (
          <ListItem alignItems="flex-start">
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
                </React.Fragment>
              }
            />
          </ListItem>
        ))}
      </List>
    </>
  );
}
