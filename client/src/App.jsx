import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Search from "./Components/Search";
import Category from "./Components/Category";
import CategoryList from "./Components/CategoryList";
import CategoryListSmall from "./Components/CategoryListSmall";
import OpportunityList from "./Components/OpportunityList";
// import OpportunityItem from "./Components/OpportunityItem";
import CreateNewOpportunity from "./Components/CreateNewOpportunity";
import AccountBox from "./Components/accountBox/AccountBox";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";

function App() {

  const [city, setCity] = useState("What is your Location?");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState(undefined);

  const handleLocation = (city, country) => {
    setCity(city)
    setCountry(country)
  }

  return (
    <div className="App">
      <NavBar handleLocation={handleLocation} city={city} country={country} />
      <Header />
      <CategoryList handleClick={() => setCategory}/>
      <CategoryListSmall />
      <Search />
      {/* Conditional for SearchList */}
      <OpportunityList location={city} category={category} />
    </div>
  );
}

export default App;