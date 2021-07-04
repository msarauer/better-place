import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Search from "./Components/Search";
import Category from "./Components/Category";
import CategoryList from "./Components/CategoryList";
import CategoryListItem from "./Components/CategoryListItem";
import OpportunityList from "./Components/OpportunityList";
import OpportunityItem from "./Components/OpportunityItem";
import CreateNewOpportunityWithModal from "./Components/CreateNewOpportunityWithModal";
import AccountBox from "./Components/accountBox/AccountBox";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import axios from 'axios'
import { BackTop } from 'antd';

function App() {

  const [city, setCity] = useState("What is your Location?");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState(undefined);
  const [opportunities, setOpportunities] = useState([]);
  const [token, setToken] = useState();

  const handleLocation = (city, country) => {
    setCity(city)
    setCountry(country)
  }
  const save = (data) => {
    console.log(data)
    axios.post("/api/opportunities", data)
    .then((data)=>{
      console.log(data);
    })
    .catch((e)=>{
      console.log("post error:", e.message) ;
    })
  }

  return (
    <div className="App">
      <NavBar handleLocation={handleLocation} city={city} country={country} token={token} setToken={setToken} />
      <Header />
      <CategoryList handleClick={(data) => setCategory(data)}/>
      <Search />
      {/* Conditional for SearchList */}
      <CreateNewOpportunityWithModal opportunities={opportunities} setOpportunities={setOpportunities} onSave={save} location={city}/>
      <OpportunityList opportunities={opportunities} setOpportunities={setOpportunities} location={city} category={category} />
      <br />
       <BackTop />
    Scroll down to see the bottom-right
    <strong className="site-back-top-basic"> gray </strong>
    button.
    </div>

  );
}

export default App;