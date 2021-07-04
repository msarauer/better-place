import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from "./common"
import { Marginer } from './Marginer';
import { AccountContext } from "./accountContext";
import { useContext } from "react";
import UploadButtons from "./UploadButtons.jsx";



const SignupForm = (props) => {
  const {switchToSignin} = useContext(AccountContext)


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <Input type="text" placeholder="Full Name" />
        <Input type="text" placeholder="PhoneNumber" />
        <Input type="text" placeholder="Address" />
        <Input type="textarea" placeholder="Bio" />
        <UploadButtons />

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

// name VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   phone_number VARCHAR(255),
//   address VARCHAR(255),
//   picture_url VARCHAR(255),
//   bio VARCHAR(255)