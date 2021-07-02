import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Login from './Components/Login';
import Search from './Components/Search';
import Category from './Components/Category';
import CategoryList from './Components/CategoryList';
import OpportunityList from './Components/OpportunityList';
import OpportunityItem from './Components/OpportunityItem';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <Login />
      <Search />
      <CategoryList />
      {/* Conditional for SearchList */}
      <OpportunityList />
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