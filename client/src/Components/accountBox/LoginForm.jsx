import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common"
import { Marginer } from './Marginer';
import { AccountContext } from './accountContext'
import { useContext, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Typography } from "@material-ui/core";
import axios from 'axios';

const useStyles = makeStyles({
  field: {
    marginTop: 5,
    marginBottom: 5,
    // display: 'block'
    maxLength:"225"
  }
})


const LoginForm = ({ setToken, token}) => {

  const classes = useStyles();
  const {switchToSignup} = useContext(AccountContext)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // const loginUser = (credentials) => {
  //   return axios
  //   .post('/login', credentials)
  //   .then((data) => console.log(credentials))
  //   .catch(e => console.log(e))
  // }

  // const toggleLogin = (anchor, open) => (event) => {
  //   if (
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setLoginPage({ ...loginPage, [anchor]: open });
  // };


  const handleSubmit = async e => {
    e.preventDefault();
    axios
      .post('/login', {email, password})
      .then((data) => {
        console.log('loginToken:',data.data.token)
        setToken((prev) => data.data.token)
        console.log(token)
      })
      .catch(e => console.log(e))
  }



  return (
    <BoxContainer>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        {/* <FormContainer > */}
        <TextField 
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className={classes.field}
              label="Email"
              variant="outlined"
              fullWidth
              required
              // error={titleError}
              // value={email}
              inputProps={{maxLength: 55}}

            />
            <Marginer direction="vertical" margin={10} />
            <TextField
              type="password" 
              onChange={(e) => setPassword(e.target.value)}
              className={classes.field}
              label="Password"
              variant="outlined"
              fullWidth
              required
              // error={titleError}
              // value={email}
              inputProps={{maxLength: 55}}

            />
          {/* <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          /> */}
        {/* </FormContainer> */}
      <Marginer direction="vertical" margin={60} />
      <SubmitButton type="submit">SignIn</SubmitButton>
      </form>
      <Marginer direction="vertical" margin={15} />
      <MutedLink href="#">Forgot Your password?</MutedLink>
      <Marginer direction="vertical" margin='1.6em' />
      <MutedLink href="#">Dont have an account? <BoldLink href='#' onClick={switchToSignup}>SignUp</BoldLink></MutedLink>
    </BoxContainer>
  )
}

export default LoginForm

