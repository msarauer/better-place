import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import CreateNewOpportunity from './CreateNewOpportunity';
import Icon from '@material-ui/core/Icon';
import "./CreateNew.scss"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateNewOpportunityWithModal ( { onSave, location, opportunities, setOpportunities, categories, setCategories, host_id, rows, setRows }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="addNewButton">
      {host_id && 
      <div><Button
      variant="contained"
      onClick={handleClickOpen}
      color="primary"
      endIcon={<Icon >add_circle</Icon>}
    >
      Add new
    </Button></div>
      }
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Tell us about your need."}</DialogTitle>
          <CreateNewOpportunity rows={rows} set={setRows} handleClose={handleClose} setOpportunities={setOpportunities} opportunities={opportunities} location={location}  onSave={onSave} categories={categories} setCategories={setCategories} host_id={host_id}/>
      </Dialog>
    </div>
  );
}