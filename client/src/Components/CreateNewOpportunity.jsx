import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { MenuItem } from "@material-ui/core";
import { FormControl, Paper } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    // display: 'block'
  },
  dropdown: {
    marginBottom: 20,
  },
  button: {
    marginBottom: 20,
  }
})



const CreateNewOpportunity = ({ opportunities, setOpportunities, onSave, location, handleClose, setCategories, categories }) => {
  const classes = useStyles();
  const [title, setTitle] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [description, setDescription] = useState('')
  const [descriptionError, setDescriptionError] = useState(false)
  const [category, setCategory] = useState('');
  const [categoryError, setCategoryError] = useState(false)
  const [needDate, setNeedDate ] = useState(null);
  const [needDateError, setNeedDateError] = useState(false)
  const [timeCommitment, setTimeCommitment ] = useState('');
  const [timeCommitmentError, setTimeCommitmentError] = useState(false)
  const [volunteersNeeded, setVolunteersNeeded ] = useState(0);
  const [volunteersNeededError, setVolunteersNeededError] = useState(false)

  useEffect(() => {

    axios.get('/api/categories')
    .then((data) => {
      setCategories(data.data.categories)
    })
    .catch((e) => {console.log(e.message)})
  }, [])

   
  // INSERT INTO opportunities (host_id , name , number_of_volunteers_needed, location, date, time_commitment, category_id)
  // req.body.host_id,
  // req.body.name,
  // req.body.number_of_volunteers_needed,
  // req.body.location,
  // req.body.date,
  // req.body.time_commitment,
  // req.body.category_id,

  const handleSubmit = (e) => {
    e.preventDefault()

    setTitleError(false);
    setDescriptionError(false);

    if (title === '') {
      setTitleError(true)
    }
    if (description === '') {
      setDescriptionError(true)
    }
    if (category === '') {
      setCategoryError(true)
    }
    if (needDate === null) {
      setNeedDateError(true)
    }
    if (timeCommitment === null) {
      setTimeCommitmentError(true)
    }
    if (volunteersNeeded === null) {
      setVolunteersNeededError(true)
    }

    if (!(title && description && category && needDate && timeCommitment && volunteersNeeded)) {
      return;
    }
    const saveData = {
      host_id: 1,
      name: title,
      number_of_volunteers_needed: volunteersNeeded,
      number_of_volunteers_added: 0,
      location: location,
      date: needDate,
      time_commitment: timeCommitment,
      category_id: 1,
      description: description
    }

    onSave(saveData);
    setOpportunities((prev) => [saveData, ...prev])
  }

  // (host_id , name , number_of_volunteers_needed, location, date, time_commitment, category_id)
  return (
    <Paper style= {{width: '100%', margin: '0 auto', padding: '2%', paddingTop: '0%'}}>
      <Typography style ={{"paddingTop": 20}} >Tell us about your needs.</Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <FormControl style = {{width: '100%', "paddingLeft": 10, "paddingRight": 10}}>
          <Grid item xs={6}>
            <TextField 
              onChange={(e) => setTitle(e.target.value)}
              className={classes.field}
              label="Title"
              variant="outlined"
              fullWidth
              required
              helperText="Give your need a short title."
              error={titleError}
              defaultValue=""
            />
          </Grid>
          <Grid item xs={12} >
          <TextField 
            onChange={(e) => setDescription(e.target.value)}
            className={classes.field}
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            helperText="Provide a short description of your need."
            error={descriptionError}
            defaultValue=""
          />
          </Grid>
            <TextField
              select
              required
              onChange={(e) => setCategory(e.target.value)}
              className={classes.dropdown}
              label="Category"
              name="Category"
              error={categoryError}
              defaultValue=""
              SelectProps={{
                multiple:true,
                value: []
              }}
            >
              {categories &&categories.map((category) => {
                return <MenuItem key={category.id}>{category.name}</MenuItem>
              })}

            </TextField>
          
          <TextField
            select
            required
            className={classes.dropdown}
            onChange={(e) => setTimeCommitment(e.target.value)}
            label="Time Commitment"
            name="Time-commitment"
            error={timeCommitmentError}
            defaultValue=""
            SelectProps={{
              multiple:true,
              value: []
            }}
          >
            <MenuItem >Quick (minutes)</MenuItem>
            <MenuItem >Short (3 hours or less)</MenuItem>
            <MenuItem >Medium (8 hours or less)</MenuItem>
            <MenuItem >Long (Full day)</MenuItem>
            <MenuItem >Extra Long (Muliple days)</MenuItem>

          </TextField>

          <TextField
            type="number"
            required
            onChange={(e) => setVolunteersNeeded(e.target.value)}
            className={classes.dropdown}
            label="# of Volunteers Required"
            name="# of Volunteers Required"
            error={volunteersNeededError}
            defaultValue=""
          >
          </TextField>
          <TextField
            id="date"
            label="Date of Need"
            type="date"
            required
            onChange={(e) => setNeedDate(e.target.value)}
            className={classes.field}
            InputLabelProps={{
              shrink: true,
            }}
            error={needDateError}
            defaultValue=""
          />
          <Grid item xs={3}>
          <Button
            className={classes.button}
            type="submit"
            color="primary"
            variant="contained"
            onClick={handleClose}
            endIcon={<KeyboardArrowRightIcon/>}
          >
            Submit
          </Button>
          </Grid>
        </FormControl>
      </form>
    </Paper>
    
  )
}

export default CreateNewOpportunity
