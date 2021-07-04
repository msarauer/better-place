import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  SmallText,
  EditLink,
} from "./common";
import { Marginer } from "./Marginer";
import { AccountContext } from "./accountContext";
import { useContext, useEffect, useState } from "react";
import AlignItemsList from "./AlignedItemList";
import axios from "axios";

const ProfileForm = (props) => {
  const { switchToSignup } = useContext(AccountContext);
  const [user, setUser] = useState({});
  const [opportunities, setOpportunities] = useState([]);

  // Used to get specific user from id
  useEffect(() => {
    axios
      .get(`/api/user/1`) // REMEMBER TO CHANGE TO :id
      .then((data) => {
        // console.log("THIS IS SOME DATA", data.data.users[0]);
        setUser(data.data.users[0]);
      })
      .catch((e) => {
        console.log("axiosError:", e);
      });
  }, []);

  useEffect(() => {
    axios
      .get("/api/users_opportunities/1")
      .then((data) => {
        setOpportunities(data);
      })
      .catch((e) => {
        console.log("axiosError:", e);
      });
  }, []);

  console.log("THIS SHOULD BE USER OBJECT-----", user);
  return (
    <>
      <BoxContainer>
        <FormContainer>
          <h1>{user.name}</h1>
          <SmallText>{user.phone_number}</SmallText>
          <SmallText>{user.address}</SmallText>
          <SmallText>{user.bio}</SmallText>
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <MutedLink href="#"></MutedLink>
        <Marginer direction="vertical" margin="1.6em" />
        <Marginer direction="vertical" margin="1.6em" />
      </BoxContainer>

      {/* <Marginer direction="vertical" margin={-10} /> */}

      <SmallText>------Completed Committments------ </SmallText>
      <Marginer direction="vertical" margin={5} />
      <EditLink href="#" onClick={switchToSignup}>
        Edit Profile
        <Marginer direction="vertical" margin={10} />
      </EditLink>
      <AlignItemsList />
    </>
  );
};

export default ProfileForm;
