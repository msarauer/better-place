import { makeStyles } from "@material-ui/core/styles";
import { getPercentage } from "../helpers/basic-helpers";
import {
  addOpportunity,
  removeOpportunity,
  rowFilter,
  updateRows,
  countVolunteersAdded,
} from "../helpers/filters-and-sorters";
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
import Link from '@material-ui/core/Link'
import './OpportunityList.scss'

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
}) => {
  const classes = useStyles();
  
  const [rows, setRows] = useState([]);
  const [usersOpportunities, setUsersOpportunities] = useState([]);
  const [tokenOpportunities, setTokenOpportunities] = useState([]);
  const [open, setOpen] = useState(false);
  const [clickedId, setClickedId ] = useState(0);
  const [loading, setLoading ] = useState(false)
  
  const handleClickOpen = (id) => {
    setOpen(true);
    setClickedId(id);
    console.log("clickedid: ", clickedId)
  };
  
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const IconTextReview = ({ icon, text, id }) => (
    <Space onClick={()=>{handleClickOpen(id)}}>
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
      axios.get("api/users_opportunities"),
    ])
    .then((all) => {
      setOpportunities((prev) => all[0].data.opportunities)
      setUsersOpportunities((prev) => all[1].data.usersOpportunities)
      setLoading(false);
    })
    .catch((e) => console.log(e))
  }, [location, category])
  
      

    // Get users_opportunities specific to user to make switches 'switched' already
      useEffect(() => {
        setLoading(true);
        console.log('rowsBeforeUpdate:', rows)
        if (token.email) {
          axios.put(`/api/users_opportunities/${token.email}`).then((data) => {
            // setTokenOpportunities((prev) => [...data.data.opportunities]);
            console.log('lat:', lat, 'lng:', lng)
            setRows(updateRows(rows, data.data.opportunities));
            setLoading(false);
          })
          .then(() => {
            
          })
        }
      }, [token]);
      

      // Count how many people have signed up for each opportunity so that it can be rendered dynamically and in real time
      useEffect(() => {
          const newRows = countVolunteersAdded(opportunities, usersOpportunities);
          // setRows((prev) => newRows)
          setRows((prev) => rowFilter(newRows, location, category))
          //   setRows((prev) => [...newRows])
          // setUsersOpportunities((prev) => [...data.data.usersOpportunities]);
          // })
        }, [location, category]);
        
        
        
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
            console.log("tokenIn addvolunteer:", token);
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
        loading={loading}
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
                text={item.location}
                key="list-vertical-star-o"
              />,
              <IconTextReview
                className={classes.selected}
                icon={StarOutlined}
                text="Reviews"
                key="list-vertical-star-o"
                id={item.host_id}
              />,
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
              avatar={<Avatar size={64} src={item.avatar}/>}
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
        <Reviews host_id={clickedId} handleClose={handleClose} open={open}/>
    </div>
  );
};

export default OpportunityList;

// // import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import FlipMove from 'react-flip-move';
// const useRowStyles = makeStyles({
//   root: {
//     '& > *': {
//       borderBottom: 'unset',
//     },
//   },
// });

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);
//   const classes = useRowStyles();

//   return (
//     <React.Fragment>
//       <TableRow className={classes.root} onClick={() => setOpen(!open)}>
//         <TableCell>
//           <IconButton aria-label="expand row" size="small" >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//         <TableCell align="right">{row.host_name}</TableCell>
//         <TableCell align="right">{row.location}</TableCell>
//         <TableCell align="right">{row.time_commitment}</TableCell>
//         <TableCell align="right">{row.number_of_volunteers_needed}</TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//               <Typography variant="h6" gutterBottom component="div">

//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Date</TableCell>                           {/*Date*/}
//                     <TableCell>Description</TableCell>                       {/*Customer*/}
// })
//                     <TableCell align="right">Progress</TableCell>           {/*Amount*/}
//                     <TableCell align="right">Category</TableCell>  {/*Total Price*/}
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   <TableCell>{formatDate(row.date)}</TableCell>                           {/*Date*/}
//                   <TableCell>{row.description}</TableCell>
//                   <TableCell>{getPercentage(row.number_of_volunteers_needed, row.number_of_volunteers_added)}</TableCell>                           {/*Date*/}
//                   <TableCell>{row.category_name}</TableCell>
//                   {/* {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>

//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                       </TableCell>
//                     </TableRow>
//                   ))} */}
//                 </TableBody>
//               </Table>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// let rows = [
//   {
//     id: 1,
//     host_name: 2,
//     name: 'Cleaning out ditches',
//     number_of_volunteers_needed: 10,
//     location: 'xxx',
//     date: 'today',
//     time_commitment: '2 days',
//     category_name: 'Family',
//     description: 'I think it would be nice if a few of us got together and cleaned out some of the ditches by the local church!',
//   return (
//     <TableContainer component={Paper} className={classes.root}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell onClick={(prev) => {setColumn('name')}}>Title</TableCell>
//             <TableCell onClick={(prev) => {setColumn('host_name')}} align="right">Host</TableCell>
//             <TableCell onClick={(prev) => {setColumn('location')}} align="right">Location</TableCell>
//             <TableCell align="right">Time Commitment</TableCell>
//             <TableCell align="right">Volunteers Needed</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {/* <FlipMove typeName={null}> */}
//           {rows.map((row) => (
//      history: [
//             <Row key={row.name} row={row} />
//           ))}
//           {/* </FlipMove> */}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
//       { date: '2020-01-05', customerId: '11091700', amount: 3 },
//       { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
//     ]
//   },
//   {
//     id: 2,
//     host_name: 3,
//     name: 'Take Grandma to the clinic',
//     number_of_volunteers_needed: 1,
//     location: 'xxx',
//     date: 'today',
//     time_commitment: '3 days',
//     category_name: 'Family',
//     description: 'I have to work but my Grandma has an appointment for the clinic, could someone please take her?',
//      history: [
//       { date: '2020-01-05', customerId: '11091700', amount: 3 },
//       { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
//     ]
//   },
//   {
//     id: 3,
//     host_name: 2,
//     name: 'Add supports to my barn',
//     number_of_volunteers_needed: 1,
//     location: 'xxx',
//     date: 'today',  //     time_commitment: '5 days',
//     category_name: 1,
//     description: 'We are understaffed due to covid and it would be nice to have a couple volunteers help out during',
//      history: [
//       { date: '2020-01-05', customerId: '11091700', amount: 3 },
//       { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
//     ]
//   }
// ]
// footer={

// // }
