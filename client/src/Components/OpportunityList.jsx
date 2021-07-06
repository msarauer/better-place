import { makeStyles } from "@material-ui/core/styles";
import { getPercentage } from "../helpers/basic-helpers";
import {
  addOpportunity,
  removeOpportunity,
  rowFilter,
  updateRows,
  countVolunteersAdded,
} from "../helpers/filters-and-sorters";
import { getDistances, getCoords } from "../helpers/location-helpers";
import "antd/dist/antd.css";
import { List, Avatar, Space } from "antd";
import {
  StarOutlined,
  ClockCircleOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Progress, Switch } from "antd";
import ReactTooltip from "react-tooltip";
import Reviews from "./Reviews";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import "./OpportunityList.scss";
import { getDistance } from 'geolib';  

const axios = require("axios");

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(90deg, rgba(0,153,255,1) 20%, rgba(26,188,156,1)98%)",
  },
  selected: {
    color: "red",
  },
});

const OpportunityList = ({
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
}) => {
  const classes = useStyles();

  // const [rows, setRows] = useState([]);
  const [usersOpportunities, setUsersOpportunities] = useState([]);
  const [tokenOpportunities, setTokenOpportunities] = useState([]);
  const [open, setOpen] = useState(false);
  const [clickedId, setClickedId] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = (id) => {
    setOpen(true);
    setClickedId(id);
    console.log("clickedid: ", clickedId);
  };

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const IconTextReview = ({ icon, text, id }) => (
    <Space
      onClick={() => {
        handleClickOpen(id);
      }}
    >
      <Link underline="none" color="inherit">
        {React.createElement(icon)}
        &nbsp;
        {text}
      </Link>
    </Space>
  );

  const handleClose = () => {
    setOpen(false);
  };

  // Get initial Load information and then manipulate as I need
  useEffect(() => {
    setLoading(true);
    Promise.all([
      axios.get("/api/opportunities"),
      axios.get("/api/users_opportunities"),
    ])
      .then((all) => {
        console.log('lat', lat, 'lng', lng)
        setOpportunities((prev) => all[0].data.opportunities);
        setUsersOpportunities((prev) => all[1].data.usersOpportunities);
        setLoading(false);
      })
      .then(() => {
        //      console.log(getDistance({latitude: 51.5103, longitude: 7.49347},
        // {latitude: "51° 31' N", longitude: "7° 28' E"})) 
        console.log('oppsWithDistance:', opportunities)
      })
      .catch((e) => console.log(e));
    }, [location, category]);
    
    // Get users_opportunities specific to user to make switches 'switched' already
    useEffect(() => {
      setLoading(true);
      if (token.email) {
        axios
        .put(`/api/users_opportunities/${token.email}`)
        .then((data) => {
          // setTokenOpportunities((prev) => [...data.data.opportunities]);
          console.log("lat:", lat, "lng:", lng);
          getCoords('4996 Earles, Vancouver')
          setRows(updateRows(rows, data.data.opportunities));
          setLoading(false);
        })
        .then(() => {});
      }
    }, [token]);
    
    
    // Calculate distance between opportunities and user
    // useEffect(() => {
      
      //   getDistances(lat, lng, opportunities)
      
      // })
      
      // Count how many people have signed up for each opportunity so that it can be rendered dynamically and in real time
      useEffect(() => {
        const newRows = getDistances(lat, lng, countVolunteersAdded(opportunities, usersOpportunities));
        // setRows((prev) => newRows)
        setRows((prev) => rowFilter(newRows, location, category));
        // setOpportunities((prev) => getDistances(lat, lng, opportunities))
        //   setRows((prev) => [...newRows])
        // setUsersOpportunities((prev) => [...data.data.usersOpportunities]);
        // })
      }, [location, category, opportunities]);
      
  // DO NOT delete, will need for sorting later

  // useEffect(() => {
  //   console.log("col", column)
  //   console.log("rows", rows)
  //   setRows((prev)=>columnSort([ ...prev], column))
  // }, [column])

  useEffect(() => {
    ReactTooltip.rebuild();
  });

  // addVolunteer and removeVolunteer are strictly axios calls, the state update functions are in filters-and-sorters as helper functions
  const addVolunteer = (opportunityId) => {
    axios.post(`/api/users_opportunities`, {
      user_id: token.id,
      opportunity_id: opportunityId,
    });
  };

  const removeVolunteer = (opportunityId) => {
    axios.delete(`/api/users_opportunities/${opportunityId}`, {
      data: { user_id: token.id },
    });
  };

  // When volunteer switch is flipped state is updated optimistically and axios call runs in the background adding/deleting user_opportunities
  const onChange = (checked, event) => {
    console.log(`switch to ${checked}`);
    const oppId = event.currentTarget.id;

    if (checked) {
      const newRows = addOpportunity(rows, oppId);
      setRows((prev) => [...newRows]);
      addVolunteer(oppId);
    }

    if (!checked) {
      const newRows = removeOpportunity(rows, oppId);
      setRows((prev) => [...newRows]);
      removeVolunteer(oppId);
    }
  };

  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={rows}
        loading={false}
        renderItem={(item) => (
          <List.Item
            key={item.name}
            actions={[
              <IconText
                icon={ClockCircleOutlined}
                text={item.time_commitment}
                key="list-vertical-star-o"
              />,
              <IconText
                icon={PushpinOutlined}
                text={`${item.location}(${Math.round(item.distance / 1000)} km)`}
                key="list-vertical-star-o"
              />,
              <IconTextReview
                className={classes.selected}
                icon={StarOutlined}
                text="Reviews"
                key="list-vertical-star-o"
                id={item.host_id}
              />,
              // <IconTextReview
              //   className={classes.selected}
              //   icon={StarOutlined}
              //   text="Reviews"
              //   key="list-vertical-star-o"
              //   id={item.host_id}
              // />,
            ]}
            extra={
              <div>
                <Progress
                  strokeColor={{
                    "0%": "#108ee9",
                    "100%": "#87d068",
                  }}
                  type="circle"
                  percent={getPercentage(
                    item.number_of_volunteers_needed,
                    item.volunteer_count
                  )}
                  format={(percent) =>
                    `${
                      item.number_of_volunteers_needed - item.volunteer_count
                    } Needed`
                  }
                />
              </div>
            }
          >
            <List.Item.Meta
              avatar={<Avatar size={64} src={item.avatar} />}
              title={
                <a
                  href={
                    "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  }
                >
                  {item.name}
                </a>
              }
              description={item.category_name}
            />
            {item.description}
            <br />
            <br />
            {token && !item.selected && (
              <Switch
                className={item.id}
                id={item.id}
                checkedChildren="Volunteering"
                unCheckedChildren="Volunteer"
                onChange={onChange}
              />
            )}
            {token && item.selected && (
              <Switch
                defaultChecked
                className={item.id}
                checkedChildren="Volunteering"
                unCheckedChildren="Volunteer"
                id={item.id}
                onChange={onChange}
              />
            )}
          </List.Item>
        )}
      />
      <Reviews host_id={clickedId} handleClose={handleClose} open={open} />
    </div>
  );
};

export default OpportunityList;
