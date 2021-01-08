import "./App.css";
import io from "socket.io-client";
import Cookies from "js-cookie";
import Homepage from "./comp/Homepage";
import { Switch, Route } from "react-router-dom";
import Netflix from "./comp/Netflix";
import Spotify from "./comp/Spotify";
// import HBOGO from "./comp/HBOGO";
// import Disney from "./comp/Disney";
import { useEffect, useState } from "react";
import SignUp from "./comp/SignUp/SignUp";
import Login from "./comp/Login/Login";
import Account from './comp/Account/Account';
import ConfirmAccount from './comp/SignUp/ConfirmAccount';
import Success from './comp/SignUp/SuccessSnackbar';

const socket = io("http://localhost:3001/");

function App() {
  const [userID, setUserID] = useState();
  const [nickname, setNickname] = useState();
  const [userData, setUserData] = useState();
  const [refreshData, setRefreshData] = useState(1)
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");


  const handleCookies = () => {
    if (Cookies.get("userID")) {
      setUserID(Cookies.get("userID"));
      setTimeout(() => {
        socket.emit("CheckUserID", userID);
      }, 1);
    }
  };

  socket.on("CheckUserIDAnswer", (data) => {
    setUserData(data)
    setNickname(data.username)
  });




  useEffect(() => {
    handleCookies();
  },[userID, refreshData]);



  return (
    <>
    
    <div className="app">
    <Switch>
      <Route path="/" exact>
        <Homepage
          userID={userID}
          nickname={nickname}
          setUserID={setUserID}
          setNickname={setNickname}
          setUserData={setUserData}
        />
      </Route>
      <Route path="/signup" exact>
        <SignUp 
          socket={socket} 
          userID={userID}           
          isSuccess={isSuccess}
          setIsSuccess={setIsSuccess}
          successMessage={successMessage}
          setSuccessMessage={setSuccessMessage} />
      </Route>
      <Route path="/login">
        <Login
          socket={socket}
          setUserID={setUserID}
          setNickname={setNickname}
          isSuccess={isSuccess}
          setIsSuccess={setIsSuccess}
          successMessage={successMessage}
          setSuccessMessage={setSuccessMessage}
        />
        </Route>
        <Route path="/account">
        {userData && <Account nickname={nickname} userData={userData}/>}  
        </Route>
      <Route path="/activate">
        <ConfirmAccount setRefreshData={setRefreshData} socket={socket} userID={userID}/>
      </Route>
      <Route path="/netflix" component={Netflix} />
      <Route path="/Spotify" component={Spotify} />
      {/* <Route path="/HBO GO" component={HBOGO} /> */}
      {/* <Route path="/Disney+" component={Disney} /> */}
    </Switch>
  </div>

      <Success isSuccess={isSuccess} setIsSuccess={setIsSuccess} successMessage={'Logged in!'}/>
    </>
  );
}

export default App;
