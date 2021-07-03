// import React, { useEffect } from 'react'


// const fakeRows = [
//   {
//     id: 1,
//     host_id: 2,
//     name: 'Cleaning out ditches',
//     number_of_volunteers_needed: 10,
//     location: 'xxx',
//     date: 'today',
//     time_commitment: '2 days',
//     category_name: 'Family' 
//   },
//   {
//     id: 2,
//     host_id: 3,
//     name: 'Take Grandma to the clinic',
//     number_of_volunteers_needed: 1,
//     location: 'xxx',
//     date: 'today',
//     time_commitment: '3 days',
//     category_name: 'Family' 
//   },
//   {
//     id: 3,
//     host_id: 2,
//     name: 'Add supports to my barn',
//     number_of_volunteers_needed: 1,
//     location: 'xxx',
//     date: 'today',
//     time_commitment: '1 days',
//     category_name: 'Family' 
//   },
//   {
//     id: 4,
//     host_name: 2,
//     name: 'Feed elders at the lodge',
//     number_of_volunteers_needed: 2,
//     location: 'xxx',
//     date: 'today',
//     time_commitment: '5 days',
//     category_name: 1
//   }
// ]

// const Login = (props) => {

//   // useEffect(() => {
//   //   axios({
//   //     method: 'get',
//   //     url: '/'
//   //   })
//   // }, [])
  
//   const list = fakeRows.map((opportunity) => {
//     return (
//     <li>
//       <p>{opportunity.name}</p>
//       <p>{opportunity.number_of_volunteers_needed}</p>
//       <p>{opportunity.location}</p>
//       <p>{opportunity.date}</p>
//       <p>{opportunity.time_commitment}</p>
//       <p>{opportunity.category_name}</p>
//     </li>
//     )
//   })

//   return (
//     <div>
//       <ui>
//         {list}
//       </ui>
//     </div>
//   )
// }

// export default Login





















import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

// 

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.host_name}</TableCell>
        <TableCell align="right">{row.location}</TableCell>
        <TableCell align="right">{row.time_commitment}</TableCell>
        <TableCell align="right">{row.category_name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.amount}</TableCell>
                      <TableCell align="right">
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


const rows = [
  {
    id: 1,
    host_id: 2,
    name: 'Cleaning out ditches',
    number_of_volunteers_needed: 10,
    location: 'xxx',
    date: 'today',
    time_commitment: '2 days',
    category_name: 'Family',
     history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ]
  },
  {
    id: 2,
    host_id: 3,
    name: 'Take Grandma to the clinic',
    number_of_volunteers_needed: 1,
    location: 'xxx',
    date: 'today',
    time_commitment: '3 days',
    category_name: 'Family',
     history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ]
  },
  {
    id: 3,
    host_id: 2,
    name: 'Add supports to my barn',
    number_of_volunteers_needed: 1,
    location: 'xxx',
    date: 'today',
    time_commitment: '1 days',
    category_name: 'Family',
     history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ]
  },
  {
    id: 4,
    host_name: 2,
    name: 'Feed elders at the lodge',
    number_of_volunteers_needed: 2,
    location: 'xxx',
    date: 'today',
    time_commitment: '5 days',
    category_name: 1,
     history: [
      { date: '2020-01-05', customerId: '11091700', amount: 3 },
      { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    ]
  }
]


// const fakeRows = [
//   createData('Help Grandma get some groceries', 159, 6.0, 24, 4.0, 3.99),
//   createData('Take my Mother to the hospital on Monday', 237, 9.0, 37, 4.3, 4.99),
//   createData('Help paint our barn', 262, 16.0, 24, 6.0, 3.79),
//   createData('Help me clean the ditches by town hall', 305, 3.7, 67, 4.3, 2.5),
//   createData('Help out at the elementary back sale', 356, 16.0, 49, 3.9, 1.5),
// ];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Title</TableCell>
            <TableCell align="right">Host</TableCell>
            <TableCell align="right">Distance</TableCell>
            <TableCell align="right">Time Commitment</TableCell>
            <TableCell align="right">Volunteers Needed&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
