// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Slide from '@material-ui/core/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function AlertDialogSlide() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const addVolunteer = (opportunityId) => {
//     axios.post(`/api/users_opportunities`, {
//       user_id: token.id,
//       opportunity_id: opportunityId,
//     });
//   };

//   const removeVolunteer = (opportunityId) => {
//     axios.delete(`/api/users_opportunities/${opportunityId}`, {
//       data: { user_id: token.id },
//     });
//   };

//   // When volunteer switch is flipped state is updated optimistically and axios call runs in the background adding/deleting user_opportunities
//   const onChange = (checked, event) => {
//     console.log(`switch to ${checked}`);
//     const oppId = event.currentTarget.id;

//     if (checked) {
//       const newRows = addOpportunity(rows, oppId);
//       setRows((prev) => [...newRows]);   
//       addVolunteer(oppId);
    
//     }

//     if (!checked) {
//       const newRows = removeOpportunity(rows, oppId);
//       setRows((prev) => [...newRows]);
//       removeVolunteer(oppId);
//     }
//   };

//   return (
//     <div>
//       {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Slide in alert dialog
//       </Button> */}

//     {/* <Switch
//         defaultChecked
//         className={item.id}
//         checkedChildren="Volunteering"
//         unCheckedChildren="Volunteer"
//         id={item.id}
//         onChange={onChange}
//     /> */}
//       <Dialog
//         open={open}
//         TransitionComponent={Transition}
//         keepMounted
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-slide-title"
//         aria-describedby="alert-dialog-slide-description"
//       >
//         <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-slide-description">
//             Are you sure you would like to volunteer for this event?
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Heck No
//           </Button>
//           <Button onClick={handleClose} color="primary">
//             Yuuuuup
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }


// {/*            <Switch
//                 defaultChecked
//                 className={item.id}
//                 checkedChildren="Volunteering"
//                 unCheckedChildren="Volunteer"
//                 id={item.id}
//                 onChange={onChange}


                
//               /> */}