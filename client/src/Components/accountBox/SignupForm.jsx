import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "./Marginer";
import { AccountContext } from "./accountContext";
import { useContext, useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 5,
    marginBottom: 5,
    // display: 'block'
    maxLength:"225"
  }
})


const SignupForm = ({ toggleLogin }) => {
  const classes = useStyles();

  const { switchToSignin } = useContext(AccountContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState(""); // Some sort of defult image maybe?

  const handleSubmit = (e) => {
    const userSave = (data) => {
      axios
        .post("/api/users", data)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log("post error:", e.message);
        });
    };

    const saveData = {
      email,
      password,
      name,
      phone_number: phoneNumber,
      address,
      bio,
      picture_url: profilePic,
    };
    userSave(saveData);
  };

  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
      <TextField 
              onChange={(e) => setEmail(e.target.value)}
              className={classes.field}
              label="Email"
              variant="outlined"
              fullWidth
              required
              // error={titleError}
              value={email}
              inputProps={{maxLength: 55}}

            />
            <TextField 
              onChange={(e) => setPassword(e.target.value)}
              className={classes.field}
              label="Password"
              variant="outlined"
              fullWidth
              required
              // error={titleError}
              // value={password}
              inputProps={{maxLength: 55}}

            />
            <TextField 
              // onChange={(e) => setPassword(e.target.value)}
              className={classes.field}
              label="Confirm Password"
              variant="outlined"
              fullWidth
              required
              // error={titleError}
              // value={password}
              inputProps={{maxLength: 55}}

            />
             <TextField 
              onChange={(e) => setName(e.target.value)}
              className={classes.field}
              label="Name"
              variant="outlined"
              fullWidth
              required
              // error={titleError}
              value={name}
              inputProps={{maxLength: 30}}

            />
             <TextField 
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={classes.field}
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              // error={titleError}
              value={phoneNumber}
              inputProps={{maxLength: 55}}

            />
            <TextField 
              onChange={(e) => setAddress(e.target.value)}
              className={classes.field}
              label="Address"
              variant="outlined"
              fullWidth
              required
              inputProps={{maxLength: 55}}

              // error={titleError}
              value={address}
            />
          <TextField 
              onChange={(e) => setBio(e.target.value)}
              className={classes.field}
              label="About Me"
              variant="outlined"
              fullWidth
              required
              // error={titleError}
              inputProps={{maxLength: 225}}
              value={bio}
            />
      <Marginer direction="vertical" margin={10} />
        
        <SubmitButton type="submit">SignUp</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <Marginer direction="vertical" margin="1.6em" />
      <MutedLink href="#">
        Already have an account?{" "}
        <BoldLink href="#" onClick={switchToSignin}>
          SignIn
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default SignupForm;

{/* <Input
type="email"
placeholder="Email"
onChange={(e) => setEmail(e.target.value)}
/>
<Input
type="password"
placeholder="Password"
onChange={(e) => setPassword(e.target.value)}
/>
<Input type="password" placeholder="Confirm Password" />
  I forget how to get the passwords to be same, something to do with password digest in database
<Input
type="text"
placeholder="Full Name"
onChange={(e) => setName(e.target.value)}
/>
<Input
type="text"
placeholder="PhoneNumber"
onChange={(e) => setPhoneNumber(e.target.value)}
/>
<Input
type="text"
placeholder="Address"
onChange={(e) => setAddress(e.target.value)}
/>
<Input
type="textarea"
placeholder="Bio"
onChange={(e) => setBio(e.target.value)}
/>
<Input
type="textarea"
placeholder="Picture URL"
onChange={(e) => setProfilePic(e.target.value)}
/> */}