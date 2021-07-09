import React, { useRef, useEffect, useState } from "react";
import "./CategoryList.scss";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CloseIcon from '@material-ui/icons/Close';

import Avatar from "@material-ui/core/Avatar";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@material-ui/icons/Send";
import { timeFormatter, getMinutes } from "../helpers/basic-helpers";
import {
  getUsersFromMessages, getConversation
} from "../helpers/filters-and-sorters";
// import ChatBubble from "@bit/mui-org.material-ui-icons.chat-bubble";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: "100%",
    height: "80vh",
  },
  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "70vh",
    overflowY: "auto",
  },
  userMessage: {
    textAlign: "rig",
  },
  send: {
    display: 'inline-block',
    float: 'right',
    maxWidth: '285px',
    alignSelf: 'flex-end',
    wordWrap: 'break-word',
    marginBottom: '0px',
    lineHeight: '24px',
    position: 'relative',
	  padding: '10px 20px',
    borderRadius: '25px',
    color: 'white',
    // background: '#0B93F6',
    background:
      "linear-gradient(90deg, rgba(26,188,156,1) 20%, rgba(0,153,255,1)98%)",
    textAlign: 'left',
    marginLeft: '120px',
    '&::before': {
      right: '-7px',
      width: '20px',
      backgroundColor: '#0B93F6',
      borderBottomLeftRadius: "16px 14px"
    },
    '&::after': {
      right: '-26px',
      width: '26px',
      backgroundColor: 'white',
      borderBottomLeftRadius: '10px'
    } 

  },
  receive : { 
    maxWidth: '285px',
    display: 'inline-block',
    
    wordWrap: 'break-word',
    marginBottom: '0px',
    lineHeight: '24px',
    position: 'relative',
	  padding: '10px 20px',
    borderRadius: '25px',
    color: 'black',
    // background: '#E5E5EA',
    background: 'linear-gradient(90deg, rgba(255,204,121,1) 23%, rgba(144,144,245,1) 100%)',
    '&::before': {
      right: '-7px',
      width: '20px',
      backgroundColor: '#E5E5EA',
      borderBottomLeftRadius: "16px 14px",
      
    },
    '&::after': {
      right: '-26px',
      width: '26px',
      backgroundColor: '#E5E5EA',
      borderBottomLeftRadius: '10px'
    },

  },
  paperRoot: {
    background:
      "linear-gradient(90deg, rgba(0,153,255,1) 20%, rgba(26,188,156,1)98%)",
      color: "white"
    },
    headerText: {
    color: 'white',
    paddingLeft: "100px",
    paddingTop: "10px"
  },
  closeButton: {

    paddingRight: "15px"
  }
});

const fakeMessages = [
  {
    id: 1,
    author: 2,
    isPrimary: false,
    message: "Hey I seen your post and was wondering what ",
    time: "2021-07-08 14:08:25-07",
  },
  {
    id: 2,
    author: 2,
    isPrimary: false,
    message: "Your opportunity sounds really cool.",
    time: "2021-07-08 00:22:25-07",
  },
  {
    id: 2,
    author: 2,
    isPrimary: false,
    message: "Thank you!",
    time: "2021-07-08 11:33:25-07",
  },
];

const Chat = ({
  users,
  messageList,
  setMessage,
  sendMessage,
  message,
  token,
  setMessageList,
  click
}) => {
  const classes = useStyles();
  // console.log("OPP USER IN CHAT-----", users)

  // ALL THIS IS USED FOR SCROLL TO BOTTOM FUNCTIONALITY MUST WAIT TO BE IN MODAL TO WORK NICE
  const messagesEndRef = useRef(null);


  // useEffect(() => {
  //   if(messagesEndRef) {
  //     console.log("messref:", messagesEndRef.current)
  //     messagesEndRef.current.addEventListener('DOMNodeInserted', event => {
  //       const {currentTarget: target} = event;
  //       target.scroll({top:target.scrollHeight, behavior: 'smooth'})
  //     })
  //   }
  // }, []);

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
      console.log('I PRESSED ENTER')
    }
  }



  // useEffect(() => {
  //   setMessageList((prev) => [filterMessages(prev, token.id)])

  // }, [])

  // const [now, setNow] = useState();

  // const timeInterval = () => {
  //   const int = () => {
  //     setInterval(() => {
  //       const now = new Date();
  //       const milliseconds = now.getTime();
  //       setNow(milliseconds / 100000)
  //     }, 1000);

  //   }

  // clearInterval(timeInterval)
  // };

  // timeInterval();

  // const [currentUsers, setCurrentUsers] = useState([]);
  const [receiver, setReceiver] = useState(false);
  // const [conversation, setConversation] = useState(false);

  useEffect(() => {
    // setCurrentUsers(getUsersFromMessages(filterMessages(messageList, token.id)), users, token.id)
  }, [messageList, token.id, users])

  // useEffect(() => {
    // setMessageList()
  // })

  

  const usersInChat = getUsersFromMessages(messageList, users, token.id).map((user) => {
    console.log(user.name)
    // const usersInChat = users.map((user) => {
    // changed usersInChat from users because  conflict with users prop.
    return (
      <ListItem onClick={() => { return setReceiver(user.id)}} button key={user.id}>
        {/* <div ref={messagesEndRef} />   */}
        <ListItemIcon>
          <Avatar alt={user.name} src={user.picture_url} />
        </ListItemIcon>
        <ListItemText primary={user.name}></ListItemText>
      </ListItem>
    );
  });

  const messages = messageList.map((message) => {
    // const messages = getConversation(messageList, token.id, receiver).map((message) => {
      return (
        <ListItem key={users.id}>
        <Grid container>
          <Grid item xs={12}>
            <ListItemText
              className={token.id === message.author ? classes.send : classes.receive}
              align={token.id === message.author ? "right" : "left"}
              primary={message.message}
            ></ListItemText>
              
          </Grid>
          <Grid item xs={12}>
            <ListItemText
              className={token.id === message.author ? classes.dateSend : classes.dateReceive}
              align={token.id === message.author ? "right" : "left"}
              secondary={
                getMinutes(message.date) === 0
                  ? "Just now" : `${getMinutes(message.date)} min ago`
              }
            ></ListItemText>

          </Grid>
        </Grid>
      </ListItem>
    );
  });

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
        <Paper className={classes.paperRoot} onClick={click}>
        <Grid container>
        <Grid item xs={6}>
          <Typography square variant="h6" className={classes.headerText}>
            Chat
          </Typography>
          </Grid>
          <Grid item xs={6} container alignItems="flex-end" direction="row-reverse" className={classes.closeButton}>
          <CloseIcon />
          </Grid>
      </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container component={Paper} className={classes.chatSection}>
        <Grid item xs={3} className={classes.borderRight500}>
          <List>
            <ListItem button key={token.id}>
              <ListItemIcon>
                <Avatar alt={token.name} src={token.picture_url} variant="rounded" style={{ border: "5px solid #1abc9c",position:"fixed", top:"20px", height: '70px', width: '70px' }} />
              </ListItemIcon>
              {/* <ListItemText primary={token.name}></ListItemText> */}
            </ListItem>
          </List>

          <Divider style={{marginTop:"35px"}}/>
          <Grid item xs={12} style={{ padding: "10px" }}>
            <TextField
              id="outlined-basic-email"
              label="Search"
              variant="outlined"
              fullWidth
              
            />
          </Grid>
          {usersInChat}
          <Divider />

        </Grid>
        <Grid item xs={9}>
          <List className={classes.messageArea}>
            {receiver && messages}
            </List>
          <Divider />
          <Grid container style={{ padding: "20px" }}>
            <Grid item xs={11}>
              <TextField
                id="outlined-basic-email"
                label="Type Something"
                fullWidth
                form="text-form"
                value={message}
                onChange={(e) => {
                  setMessage((prev) => e.target.value);
                }}
              />
            </Grid>
            <Grid xs={1} align="right">
              <Fab color="primary" aria-label="add">
                {/* <IconButton form="text-form" type="submit"  > */}
                <SendIcon
                  onClick={() => {
                    message && sendMessage(receiver);
                  }}
                />
                {/* </IconButton> */}
              </Fab>

            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </div>
  );
};

export default Chat;
