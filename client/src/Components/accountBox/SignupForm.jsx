import {
  BoldLink,
  BoxContainer,
  FormContainer,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "./Marginer";
import { AccountContext } from "./accountContext";
import { useContext, useState } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 5,
    // display: 'block'
    maxLength:"225"
  }
})


const SignupForm = ({ setToken, setLoginPage }) => {
  const classes = useStyles();

  const { switchToSignin } = useContext(AccountContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [profilePic ] = useState(""); // Some sort of defult image maybe?

  const handleSubmit = (e) => {
    const userSave = (data) => {
      axios
        .post("/api/users", data)
        .then((data) => {
          console.log(data);
          handleCreateUser()
        })
        .catch((e) => {
          console.log("post error:", e.message);
        });
    };


    const handleCreateUser = () => {
      // e.preventDefault();
      axios
        .post('/login', {email, password})
        .then((data) => {
          // console.log('loginToken:',data.data.token)
          setToken((prev) => ({prev, ...data.data.token}))
          setLoginPage({right: false})
        })
        .catch(e => console.log(e))
    }


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
    setToken({ ...saveData });

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
      <Marginer direction="vertical" margin={20} />
        
        <SubmitButton type="submit">SignUp</SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={65} />
      {/* <Marginer direction="vertical" margin="1.6em" />
      <Marginer direction="vertical" margin="1.6em" /> */}
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