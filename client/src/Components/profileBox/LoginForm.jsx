import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common"
import { Marginer } from './Marginer';
import { AccountContext } from './accountContext'
import { useContext } from "react";



const LoginForm = (props) => {

  const {switchToSignup} = useContext(AccountContext)

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forgot Your password?</MutedLink>
      <Marginer direction="vertical" margin='1.6em' />
      <SubmitButton type="submit">SignIn</SubmitButton>
      <Marginer direction="vertical" margin='1.6em' />
      <MutedLink href="#">Dont have an account? <BoldLink href='#' onClick={switchToSignup}>SignUp</BoldLink></MutedLink>
    </BoxContainer>
  )
}

export default LoginForm
