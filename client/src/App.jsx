import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CategoryList from "./Components/CategoryList";
import OpportunityList from "./Components/OpportunityList";
import CreateNewOpportunityWithModal from "./Components/CreateNewOpportunityWithModal";
import axios from 'axios'
import { BackTop } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filterbar from "./Components/Filterbar";
import Chat from "./Components/Chat";
import { io } from "socket.io-client";



// const setToken = userToken => {
  //   console.log('setToken called')
  //   sessionStorage.setItem('token', JSON.stringify(userToken));
  // }
  
  // const getToken = () => {
    //   const tokenString = sessionStorage.getItem('token');
    //   const userToken = JSON.parse(tokenString);
    //   console.log('userToken:', userToke.n.token)
    //   return userToken?.token
    // }
    let socket;
    const CONNECTION_PORT = '/';
    
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
      const [distance, setDistance] = useState('');
      const [open, setOpen] = useState(false);
      // const [location, setLocation] = useState('');
      const [currentPage, setCurrentPage] = useState(1);
      const [users, setUsers] = useState([]);

      const [ message, setMessage ] = useState();
      const [ messageList, setMessageList ] = useState([]);
      const sideBarSection = useRef(null);
      
      const goToSideBarSection = () => {
        window.scrollTo({ top: (sideBarSection.current.offsetTop - 70), behavior: "smooth"})
        console.log("ref:", sideBarSection)
      }
      
      useEffect(() => {
       socket = io(CONNECTION_PORT)
      }, [CONNECTION_PORT])
      
      useEffect(()=> {
        socket.on("receive_message", (data) => {
          console.log('recieve_message:', data);
          setMessageList((prev) => ([ ...prev, data ]))
        })
      })

      const sendMessage = async (userId) => {
        let messageContent = {
          chat: 'chat',
          content: {
            author: token.id, 
            receiver: userId,
            message: message,
            time: "2021-07-08 14:08:25-07"
          }
        }
        socket.emit("send_message", messageContent);
        // setMessageList((prev) => ([ ...prev, messageContent.content ]));
        await setMessageList([ ...messageList, messageContent.content ]);
        setMessage("");
      }
      
      const connectToChat = () => {
        socket.emit('chat', 'betsy')
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
          
          const handleClickOpen = () => {
            setOpen(true);
            connectToChat()
          };

          // useEffect(() => {
            //   console.log('tokenUseEffect:', token)
            //   // setLoggedIn(token)
  //   const userToken = sessionStorage.getItem('token')
  //   setToken(JSON.parse(userToken))
  //   console.log('tokennnn:',token)
  
  // }, [])
  
  
  
  
  return (
    <div className="App">

      <NavBar setLat={setLat} setLng={setLng} handleLocation={handleLocation} city={city} country={country} token={token} setToken={setToken} opportunities={opportunities} />
      
      <Header />

      <CategoryList click={goToSideBarSection} handleClick={(data) => setCategory(data)} categories={categories} setCategories={setCategories}/>
       <Chat message={message} messageList={messageList} sendMessage={sendMessage} setMessage={setMessage} host_id={token} users={users}/>
 
      <CreateNewOpportunityWithModal open={open} setOpen={setOpen} rows={rows} setRows={setRows} opportunities={opportunities} setOpportunities={setOpportunities} onSave={save} location={city} categories={categories} setCategories={setCategories} host_id={token}/>
      <div className="container">
        <div className= "row">
          <div className="col-3" ref={sideBarSection}>
            <Sidebar distance={distance} setDistance={setDistance} timeCommitment={timeCommitment} categoryFromApp={category} search={search} setSearch={setSearch} setRows={setRows} setTimeCommitment={(data) => setTimeCommitment(data)} handleClick={(data) => setCategory(data)} setCategory={setCategory} rows={rows} setColumn={setColumn} categories={categories} />
          </div>
          <div className="col-9">
            <div className= "row text-right no-gutters">
              <Filterbar setRows={setRows} opportunities={opportunities} rows={rows} handleClickOpen={handleClickOpen} host_id={token}/>
            </div>
            <div className= "row no-gutters">
              <OpportunityList users={users} setUsers={setUsers} currentPage ={currentPage} setCurrentPage={setCurrentPage} search={search} timeCommitment={timeCommitment} column={column} rows={rows} setRows={setRows} lat={lat} lng={lng} token={token} opportunities={opportunities} setOpportunities={setOpportunities} location={city} category={category} distance={distance} />
            </div>
          </div>
        </div>
      </div>
      <br />
      {/* <Chat /> */}
       <BackTop />
       <Footer />

    </div>

  );
}

export default App;