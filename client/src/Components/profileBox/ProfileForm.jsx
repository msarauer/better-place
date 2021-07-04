import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton, SmallText, EditLink } from "./common"
import { Marginer } from './Marginer';
import { AccountContext } from './accountContext'
import { useContext } from "react";
import AlignItemsList from "./AlignedItemList";






const ProfileForm = (props) => {

  const {switchToSignup} = useContext(AccountContext)

  return (
    <>
    <BoxContainer>
      <FormContainer>
        <h1>Betsy</h1>
          <SmallText>
          Phone number
          </SmallText>
          <SmallText>
          Location
          </SmallText>
        <SmallText>
          I am the greatest cow to ever grace this world. None can withstand my pure glory
          </SmallText>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#"></MutedLink>
      <Marginer direction="vertical" margin='1.6em' />
      <Marginer direction="vertical" margin='1.6em' />
    </BoxContainer>
    <AlignItemsList />
      <EditLink href='#' onClick={switchToSignup}>Edit Profile</EditLink>
</>
)
}

export default ProfileForm
