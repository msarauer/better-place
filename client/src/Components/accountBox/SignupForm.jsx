import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common"
import { Marginer } from './Marginer';
import { AccountContext } from "./accountContext";
import { useContext } from "react";



const SignupForm = (props) => {
  const {switchToSignin} = useContext(AccountContext)


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin='1.6em' />
      <SubmitButton type="submit">SignUp</SubmitButton>
      <Marginer direction="vertical" margin='1.6em' />
      <MutedLink href="#">Already have an account? <BoldLink href='#' onClick={switchToSignin}>SignIn</BoldLink></MutedLink>
    </BoxContainer>
  )
}

export default SignupForm