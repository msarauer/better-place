import React, { Component, useState } from "react";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@material-ui/icons/Room";
import { Popover, Button } from "antd";
import IconButton from "@material-ui/core/IconButton";
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from "@material-ui/core/styles";
import { Chat } from '@material-ui/icons'
import { dateFormatter } from '../helpers/basic-helpers';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  card: {
    borderRadius: "50%",
    color: "red"
  },
})

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

 





export default function Map({ latitude, longitude, rows, handleClickPopper, setReceiver }) {
  const classes = useStyles();
  const defaultProps = {
    zoom: 11,
    resetBoundsOnResize: true
  };

  const handleChatButton = (id) => {
    handleClickPopper();
    setReceiver(id);
  }

  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const pins = rows.map((pin) => {

    const text = <span style={{display: 'inline', fontWeight:"bold", borderRadius:'50%' }}><Avatar alt={pin.name} src={pin.avatar} ></Avatar>{pin.name}</span>;
    const content = (
      <div >
        <p>{pin.category}</p>
        <p>{pin.time_commitment}</p>
        <p>{dateFormatter(pin.date)}</p>
        <Chat onClick={() => handleChatButton(pin.host_id)} />
        <div>
         <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Volunteer"
      /> 
      </div>

      </div>
    );
    return (
      <Popover
        placement="topLeft"
        lat={pin.lat}
        lng={pin.lng}
        title={text}
        content={content}
        trigger="click"
        overlayClassName={classes.card}
      >
        <IconButton style={{transform: 'translate(-50%, -100%)'}}>
          <RoomIcon
            
            color={"secondary"}
            fontSize="large"
            // lat={pin.lat}
            // lng={pin.lng}
            text={pin.description}
          />
        </IconButton>
      </Popover>
    );
  });

  const center = { lat: Number(latitude), lng: Number(longitude) };
  return (
    // Important! Always set the container height explicitly

    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
      defaultCenter={center}
      defaultZoom={defaultProps.zoom}
    >
      {pins}
    </GoogleMapReact>
  );
}
