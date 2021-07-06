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
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import UploadButtons from "../accountBox/UploadButtons";

const EditForm = ({ token, setToken }) => {
  const { switchToSignin } = useContext(AccountContext);
  const [user, setUser] = useState({});
  const [email, setEmail] = useState(token.email);
  const [password, setPassword] = useState(token.password);
  const [name, setName] = useState(token.name);
  const [phoneNumber, setPhoneNumber] = useState(token.phone_number);
  const [address, setAddress] = useState(token.address);
  const [bio, setBio] = useState(token.bio);
  const [profilePic, setProfilePic] = useState(token.picture_url); // Some sort of defult image maybe?

  // useEffect(() => {
  //   axios
  //     .get(`/api/user/${token}`) // REMEMBER TO CHANGE TO :id
  //     .then((data) => {
  //       const userInfo = data.data.users[0];
  //       setEmail(userInfo.email);
  //       setPassword(userInfo.password);
  //       setName(userInfo.name);
  //       setPhoneNumber(userInfo.phone_number);
  //       setAddress(userInfo.address);
  //       setBio(userInfo.bio);
  //       setProfilePic(userInfo.profile_pic);
  //     })
  //     .catch((e) => {
  //       console.log("axiosError:", e);
  //     });
  // }, []);

  const handleSubmit = (e) => {
    const userSave = (data) => {
      axios
        .put(`/api/user/${token.email}`, data) // REMEMBER TO CHANGE TO :id
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
    // console.log(token)
    setToken({ ...saveData });
  };


  return (
    <BoxContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Change Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input type="password" placeholder="Confirm New Password" />
        {/*  I forget how to get the passwords to be same, something to do with password digest in database*/}
        <Input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="PhoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Input
          type="textarea"
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Input
          type="textarea"
          placeholder="Insert New Picture URL"
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <Marginer direction="vertical" margin={15} />

        <SubmitButton onClick={switchToSignin} type="submit">
          Confirm
        </SubmitButton>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <Marginer direction="vertical" margin="1.6em" />
      <Marginer direction="vertical" margin="1.6em" />
      <MutedLink href="#">
        Changed your mind?{" "}
        <BoldLink href="#" onClick={switchToSignin}>
          Cancel
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default EditForm;
