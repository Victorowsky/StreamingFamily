import "./App.css";
import io from "socket.io-client";
import Cookies from "js-cookie";
import Homepage from "./comp/Homepage";
import { Switch, Route } from "react-router-dom";
import Netflix from "./comp/Netflix";
import Spotify from "./comp/Spotify";
import Error from "./comp/SignUp/ErrorSnackbar"
// import HBOGO from "./comp/HBOGO";
// import Disney from "./comp/Disney";
import React, { useEffect, useState } from "react";
import SignUp from "./comp/SignUp/SignUp";
import Login from "./comp/Login/Login";
import Account from './comp/Account/Account';
import ConfirmAccount from './comp/SignUp/ConfirmAccount';
import Success from './comp/SignUp/SuccessSnackbar';

const socket = io("http://localhost:3001/");

export const DataContext = React.createContext()


function App() {
  const [userID, setUserID] = useState();
  const [nickname, setNickname] = useState();
  const [userData, setUserData] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Try again!");


  socket.on("CheckUserIDAnswer", (data) => {
    setUserData(data)
    setNickname(data.username)
  });


  useEffect(() => {
      if (Cookies.get("userID")) {
        setUserID(Cookies.get("userID"));
        setTimeout(() => {
          socket.emit("CheckUserID", userID);
        }, 1);
      } 
  },[userID]);



  return (
    <>
    <DataContext.Provider 
    value={{userID, setUserID,nickname, setNickname, userData, setUserData, socket, isSuccess, setIsSuccess, successMessage, setSuccessMessage, isError, setIsError, errorMessage,setErrorMessage}}>

    <div className="app">
    <Switch>
      <Route path="/" exact>
        <Homepage/>
      </Route>
      <Route path="/signup" exact>
        <SignUp />
      </Route>
      <Route path="/login">
        <Login/>
        </Route>
        <Route path="/account">
        {userData && <Account nickname={nickname} userData={userData}/>}  
        </Route>
      <Route path="/activate">
        <ConfirmAccount />
      </Route>
      <Route path="/netflix" component={Netflix} />
      <Route path="/Spotify" component={Spotify} />
      {/* <Route path="/HBO GO" component={HBOGO} /> */}
      {/* <Route path="/Disney+" component={Disney} /> */}
    </Switch>
  </div>
      <Success/>
      <Error
      />

    </DataContext.Provider>

    </>
  );
}

export default App;
