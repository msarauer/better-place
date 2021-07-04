import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common"
import { Marginer } from './Marginer';
import { AccountContext } from './accountContext'
import { useContext, useState } from "react";



const LoginForm = (props) => {
  const [email, setEmail] = useState("Email")
  const [password, setPassword] = useState("")

  const {switchToSignup} = useContext(AccountContext)


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email"/>

      <Marginer direction="vertical" margin={10} />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={15} />
      <MutedLink href="#">Forgot Your password?</MutedLink>
      <Marginer direction="vertical" margin={60} />

      <SubmitButton type="submit">SignIn</SubmitButton>
      <Marginer direction="vertical" margin='1.6em' />
      <MutedLink href="#">Dont have an account? <BoldLink href='#' onClick={switchToSignup}>SignUp</BoldLink></MutedLink>
    </BoxContainer>
  )
}

export default LoginForm

