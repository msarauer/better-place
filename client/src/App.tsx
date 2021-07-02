import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Search from "./Components/Search";
import Category from "./Components/Category";
import CategoryList from "./Components/CategoryList";
import OpportunityList from "./Components/OpportunityList";
import OpportunityItem from "./Components/OpportunityItem";
import AccountBox from "./Components/accountBox/AccountBox";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
// import { toggleDrawer } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <CategoryList />
      {/* Conditional for SearchList */}
      <OpportunityList />
      <Header />

      {/* Login/Restaurant */}

      {/* {['left', 'right', 'top', 'bottom'].map((anchor) => (
  <React.Fragment key={anchor}>
    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
      <Grid container justify="flex-end">
      <AccountBox />
      </Grid>
    </Drawer>
  </React.Fragment>

))} */}
    </div>
  );
}

export default App;

// <App>
// 	<NavBar>
//  		<Logo>
//   	<Location>
// 		<LinkList>
// 		  <Link>
// 		  <Link>
//  	    <Login>
//  	  </LinkList>
//  	</NavBar>
//   <Jumbotron>

//   <CategoryList>
//    	<Category>
// 		<Category>
// 		<Category>
// 		<Category>
// 		<Category>
//   </CategoryList>

//   {categoryIsSelected &&  (
//   <SearchList>
// 		<SearchItem>
// 		<SearchItem>
// 		<SearchItem>
// 		<SearchItem>
//   </SearchList>
//   )}
// </App>
