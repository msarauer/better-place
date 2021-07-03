import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import Select from '@material-ui/core/Select';
import { MenuItem } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { FormControl, Checkbox } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  },
  dropdown: {
    marginBottom: 20,
  }
})

const initialFormValues = {
  name: '',
  description: '',
  defaultLocation: 'true',
  date: new Date(),
  timeCommitment: '',
  category: 0,
  subCategory: 0
}

const CreateNewOpportunity = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)


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

    if(title && description) {
      console.log(title, description)
    }
  }

  // (host_id , name , number_of_volunteers_needed, location, date, time_commitment, category_id)
  return (
    <Grid container>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <FormControl>
          <TextField 
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Name"
          variant="outlined"
          fullWidth
          required
          helperText="Give your need a short name."
          error={titleError}
          />
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
          />
          <TextField
          select
          className={classes.dropdown}
          label="Category"
          name="Category"
          >
            <MenuItem value="Physical">Physical</MenuItem>
            <MenuItem value="Home Repair">Home Repair</MenuItem>
          </TextField>

          <TextField
          select
          className={classes.dropdown}
          label="Sub-Category"
          name="Sub-Category"
          >
            <MenuItem value="10">Ten</MenuItem>
            <MenuItem value="20">Twenty</MenuItem>
          </TextField>

          <TextField
          type="number"
          className={classes.dropdown}
          label="# of Volunteers Required"
          name="# of Volunteers Required"
          >
          </TextField>
        
          <Button
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon/>}
          >
            Submit
          </Button>
          <Checkbox
          label="Use Default Address"
          >

          </Checkbox>
        </FormControl>
      </form>
    </Grid>
  )
}

export default CreateNewOpportunity
