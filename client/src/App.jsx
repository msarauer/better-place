import React, { useState, useRef } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
<<<<<<< HEAD
import Search from "./Components/Search";
import Sidebar from './Components/Sidebar'
import Footer from './Components/Footer'
=======
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
>>>>>>> 7c822a8eb901de7b325d19323306b68ec7b5fa9e
import CategoryList from "./Components/CategoryList";
import OpportunityList from "./Components/OpportunityList";
import CreateNewOpportunityWithModal from "./Components/CreateNewOpportunityWithModal";
import axios from 'axios'
import { BackTop } from 'antd';
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
  const [category, setCategory] = useState('');
  const [opportunities, setOpportunities] = useState([]);
  const [categories, setCategories] = useState('');
  const [token, setToken] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [rows, setRows] = useState('');
  const [column, setColumn] = useState('')
  const [timeCommitment, setTimeCommitment] = useState('');
  const [search, setSearch ] = useState('');
  const [distance, setDistance] = useState(20000);

  const sideBarSection = useRef(null);

  const goToSideBarSection = () => {
    window.scrollTo({ top: (sideBarSection.current.offsetTop - 70), behavior: "smooth"})
    console.log("ref:", sideBarSection)
  }

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
      <CategoryList click={goToSideBarSection} handleClick={(data) => setCategory(data)} categories={categories} setCategories={setCategories}/>
 
      {/* Conditional for SearchList */}
<<<<<<< HEAD
      <CreateNewOpportunityWithModal opportunities={opportunities} setOpportunities={setOpportunities} onSave={save} location={city} categories={categories} setCategories={setCategories} host_id={token}/>

      <Sidebar rows={rows} setRows={setRows} lat={lat} lng={lng} token={token} opportunities={opportunities} setOpportunities={setOpportunities} location={city} category={category}/>
=======
      <CreateNewOpportunityWithModal rows={rows} setRows={setRows} opportunities={opportunities} setOpportunities={setOpportunities} onSave={save} location={city} categories={categories} setCategories={setCategories} host_id={token}/>
      <div className="container">
        <div className= "row">
          <div className="col-3" ref={sideBarSection}>
            <Sidebar distance={distance} setDistance={setDistance} timeCommitment={timeCommitment} categoryFromApp={category} search={search} setSearch={setSearch} setRows={setRows} setTimeCommitment={(data) => setTimeCommitment(data)} handleClick={(data) => setCategory(data)} setCategory={setCategory} rows={rows} setColumn={setColumn} categories={categories} />
          </div>
          <div className="col-9">
            <OpportunityList search={search} timeCommitment={timeCommitment} column={column} rows={rows} setRows={setRows} lat={lat} lng={lng} token={token} opportunities={opportunities} setOpportunities={setOpportunities} location={city} category={category} distance={distance} />
          </div>
        </div>
      </div>
>>>>>>> 7c822a8eb901de7b325d19323306b68ec7b5fa9e
      <br />
       <BackTop />
       <Footer />

    </div>

  );
}

export default App;