import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
import CategoryList from "./Components/CategoryList";
import OpportunityList from "./Components/OpportunityList";
import CreateNewOpportunityWithModal from "./Components/CreateNewOpportunityWithModal";
import axios from 'axios'
import { BackTop } from 'antd';
import useToken from './hooks/useToken'
import 'bootstrap/dist/css/bootstrap.min.css';



  // const setToken = userToken => {
  //   console.log('setToken called')
  //   sessionStorage.setItem('token', JSON.stringify(userToken));
  // }

  // const getToken = () => {
  //   const tokenString = sessionStorage.getItem('token');
  //   const userToken = JSON.parse(tokenString);
  //   console.log('userToken:', userToken.token)
  //   return userToken?.token
  // }

function App() {

  const [city, setCity] = useState("What is your Location?");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState(undefined);
  const [opportunities, setOpportunities] = useState([]);
  const [categories, setCategories] = useState();
  const [token, setToken] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [rows, setRows] = useState('');

  // const { token, setToken } = useToken();
  
  // useEffect(() => {
  //   const token = sessionStorage.getItem('token')
  //   setToken(token)
  //   console.log(token)
  // }, [])



  // const saveToken = userToken => {
  //   sessionStorage.setItem('token', JSON.stringify(userToken));
  //   setToken(userToken.token);
  // };

  // const token = getToken();


  const handleLocation = (city, country) => {
    setCity(prev => city)
    setCountry(prev => country)
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

  // useEffect(() => {
  //   console.log('tokenUseEffect:', token)
  //   // setLoggedIn(token)
  //   const userToken = sessionStorage.getItem('token')
  //   setToken(JSON.parse(userToken))
  //   console.log('tokennnn:',token)

  // }, [])



  return (
    <div className="App">
      <NavBar setLat={setLat} setLng={setLng} handleLocation={handleLocation} city={city} country={country} token={token} setToken={setToken} />
      <Header />
      <CategoryList handleClick={(data) => setCategory(data)} categories={categories} setCategories={setCategories}/>
 
      {/* Conditional for SearchList */}
      <CreateNewOpportunityWithModal opportunities={opportunities} setOpportunities={setOpportunities} onSave={save} location={city} categories={categories} setCategories={setCategories} host_id={token}/>

      <Sidebar rows={rows} setRows={setRows} lat={lat} lng={lng} token={token} opportunities={opportunities} setOpportunities={setOpportunities} location={city} category={category}/>
      <br />
       <BackTop />
       <Footer />

    </div>

  );
}

export default App;