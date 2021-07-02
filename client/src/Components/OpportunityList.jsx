// const OpportunityList = ({ articles }) => (
//   {articles.map(article => (
//     <Article key={article.id} {...article} />
//   ))}
// );

// /**
//  * AFTER:
//  */
// import FlipMove from 'react-flip-move';

// const TopArticles = ({ articles }) => (
//   <FlipMove>
//     {articles.map(article => (
//       <Article key={article.id} {...article} />
//     ))}
//   </FlipMove>
// );

// export default OpportunityList;

// import * as React from "react";
// import { DataGrid } from "@material-ui/data-grid";

// const columns = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "firstName",
//     headerName: "First name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "lastName",
//     headerName: "Last name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 110,
//     editable: true,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue(params.id, "firstName") || ""} ${
//         params.getValue(params.id, "lastName") || ""
//       }`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// export default function DataGridDemo() {
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// import ListItemText from "@material-ui/core/ListItemText";
// import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import Checkbox from "@material-ui/core/Checkbox";
// import Avatar from "@material-ui/core/Avatar";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "80%",
//     margin: "0 auto",
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function OpportunityList() {
//   const classes = useStyles();
//   const [checked, setChecked] = React.useState([1]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   const data = ["Help with chores", "help sweep", "help feed the animals"];

//   return (
//     <List dense className={classes.root}>
//       {data.map((value) => {
//         const index = data.indexOf(value);
//         const labelId = `checkbox-list-secondary-label-${index}`;
//         return (
//           <ListItem key={index} button>
//             <ListItemAvatar>
//               <Avatar
//                 alt={`Avatar n°${index + 1}`}
//                 src={`/static/images/avatar/${index + 1}.jpg`}
//               />
//             </ListItemAvatar>
//             <ListItemText id={labelId} primary={`${value}`} />
//             <ListItemText id={labelId} primary={`${value}`} />
//             <ListItemSecondaryAction>
//               <Checkbox
//                 edge="end"
//                 onChange={handleToggle(index)}
//                 checked={checked.indexOf(index) !== -1}
//                 inputProps={{ "aria-labelledby": labelId }}
//               />
//             </ListItemSecondaryAction>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }
