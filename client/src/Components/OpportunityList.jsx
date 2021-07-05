
import { getPercentage } from '../helpers/basic-helpers';
import { rowFilter } from '../helpers/filters-and-sorters';
import 'antd/dist/antd.css';
import { List, Avatar, Space } from 'antd';
import { StarOutlined, ClockCircleOutlined, PushpinOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Progress } from 'antd';
const axios = require('axios');



const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}



const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

// const classes = useTableStyles();
const OpportunityList = ({ city, category, location, opportunities, setOpportunities }) => {
  
 
  const [rows, setRows] = useState([]);
  const [column, setColumn] = useState(undefined);
  
  useEffect(() => {
    axios.get(`/api/opportunities`)
    .then((data) => {
      setOpportunities(data.data.opportunities);
      
      console.log(data.data);
    })
    .catch((e) => {console.log('axiosError:', e)})
  }, [location]);
  
  useEffect(() => {
    const filteredRows = rowFilter(opportunities, location, category)
    setRows(filteredRows);
  }, [location, category, opportunities])
  
  // useEffect(() => {
  //   console.log("col", column)
  //   console.log("rows", rows)
  //   setRows((prev)=>columnSort([ ...prev], column))
  // }, [column])

  
  
  


  return (
    <div>
        <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 10,
    }}
    dataSource={rows}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.name}
        actions={[
          <IconText icon={ClockCircleOutlined} text={item.time_commitment} key="list-vertical-star-o" />,
          <IconText icon={PushpinOutlined} text={item.location} key="list-vertical-star-o" />,
          <IconText icon={StarOutlined} text="Volunteer" key="list-vertical-star-o" />
        ]}
        extra={
          <div>
          <Progress  strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }} type="circle" percent={getPercentage(item.number_of_volunteers_needed, item.number_of_volunteers_added)} format={percent => `${item.number_of_volunteers_needed - item.number_of_volunteers_added} Needed`} /> 
          </div>
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}>{item.name}</a>}
          description={item.category_name}
        />
        {item.description}
      </List.Item>
    )}
  />,
    </div>
  )
}

export default OpportunityList 



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