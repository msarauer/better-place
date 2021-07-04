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
import UploadButtons from "./UploadButtons.jsx";
import axios from "axios";

const SignupForm = ({ toggleLogin }) => {
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
        <Input
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
        {/*  I forget how to get the passwords to be same, something to do with password digest in database*/}
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
        />
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

// name VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL,
//   password VARCHAR(255) NOT NULL,
//   phone_number VARCHAR(255),
//   address VARCHAR(255),
//   picture_url VARCHAR(255),
//   bio VARCHAR(255)
