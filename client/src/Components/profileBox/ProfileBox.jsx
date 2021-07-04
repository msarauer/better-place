import { useState } from 'react'
import styled from "styled-components"
import LoginForm from "./ProfileForm";
import { motion } from "framer-motion"
import SignupForm from './EditForm';
import { AccountContext } from './accountContext';
import AlignItemsList from './AlignedItemList';


const BoxContainer = styled.div`
  width: 500px;
  height: 800px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;


const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-right: 5em;
`;


const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -400px;
  left: -350px;
  transform: rotate(60deg);
  background: rgb(26,188,156);
  background: linear-gradient(90deg, rgba(26,188,156,1) 20%, rgba(0,153,255,1) 98%);
  z-index: 10;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 120%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "270%",
    height: "1350px",
    borderRadius: "20%",
    tranform: "rotate(60deg)"
  },
  collapsed: {
    width: "160%",
    height: "550px",
    borderRadius: "50%",
    tranform: "rotate(60deg)"
  }
}

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
}


const AccountBox = () => {
  const [isExpanded, setExpanded] = useState(false)
  const [active, setActive] = useState("signin");


  const playExpandedAnimation = () => {
    setExpanded(true)
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500)
  }


  const switchToSignup = () => {
    playExpandedAnimation();
    setTimeout(() => {
      setActive("signup")
    }, 600)
  }
  const switchToSignin = () => {
    playExpandedAnimation();
    setTimeout(() => {
      setActive("signin")
    }, 600)
  }

  const contextValue = { switchToSignup, switchToSignin }

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>PICTURE</HeaderText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>PICTURE</HeaderText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}


export default AccountBox
