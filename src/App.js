import "./App.css";
import io from "socket.io-client";
import Cookies from "js-cookie";
import Homepage from "./comp/Homepage";
import { Switch, Route } from "react-router-dom";
import Error from "./comp/SignUp/ErrorSnackbar";
import React, { useEffect, useState } from "react";
import SignUp from "./comp/SignUp/SignUp";
import Login from "./comp/Login/Login";
import Account from "./comp/Account/Account";
import MyParties from "./comp/MyParties/MyParties";
import ConfirmAccount from "./comp/SignUp/ConfirmAccount";
import Success from "./comp/SignUp/SuccessSnackbar";
import StreamingPlatformComp from "./comp/StreamingPlatformComp";
import PartyInfo from "./comp/MyParties/PartyInfo";
import LoginPage from "./comp/LoginPage";
import RemindPassword from "./comp/Account/RemindPassword";

const dbURL = "https://stormy-refuge-26952.herokuapp.com/";

// const socket = io("localhost:3001/");
const socket = io(dbURL);

export const DataContext = React.createContext();

function App() {
  const [userID, setUserID] = useState();
  const [nickname, setNickname] = useState();
  const [userData, setUserData] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Try again!");
  const [isLoginPage, setIsLoginPage] = useState(false);

  socket.on("CheckUserIDAnswer", (data) => {
    setUserData(data);
    setNickname(data.username);
  });

  useEffect(() => {
    if (Cookies.get("userID")) {
      setUserID(Cookies.get("userID"));
      setTimeout(() => {
        socket.emit("CheckUserID", userID);
      }, 1);
    } else {
      setIsLoginPage(true);
    }
  }, [userID]);

  const handleCreateParty = (
    userID,
    partyName,
    text,
    maxUsers,
    streamingPlatform
  ) => {
    if (userID && partyName && text && maxUsers < 6 && streamingPlatform) {
      socket.emit("createParty", {
        userID,
        partyName,
        text,
        maxUsers,
        streamingPlatform,
      });
    } else if (!userID) {
      setIsError(true);
      setErrorMessage("You need to login!");
    } else if (maxUsers > 5) {
      setIsError(true);
      setErrorMessage("Party can have max 5 users");
    } else {
      setIsError(true);
      setErrorMessage("Check it one more time");
    }
  };

  return (
    <>
      <DataContext.Provider
        value={{
          userID,
          setUserID,
          nickname,
          setNickname,
          userData,
          setUserData,
          socket,
          isSuccess,
          setIsSuccess,
          successMessage,
          setSuccessMessage,
          isError,
          setIsError,
          errorMessage,
          setErrorMessage,
          handleCreateParty,
          setIsLoginPage,
        }}
      >
        <div className="app">
          {isLoginPage ? ( // FOR NEW USERS (LOGGED OUT)
            <>
              <Route path="/" exact>
                <LoginPage />
              </Route>

              <Route path="/signup" exact>
                <SignUp />
              </Route>
              <Route path="/remindpassword/:code">
                <RemindPassword />
              </Route>
            </>
          ) : (
            <Switch>
              <Route path="/" exact>
                <Homepage />
              </Route>

              <Route path="/login">
                <Login />
              </Route>
              <Route path="/LoginPage">
                <LoginPage />
              </Route>
              <Route path="/account">{userData && <Account />}</Route>
              <Route path="/activate">
                <ConfirmAccount />
              </Route>

              <Route path="/myparties">{userData && <MyParties />}</Route>
              <Route path="/Netflix">
                <StreamingPlatformComp
                  color="#e50914"
                  streamingPlatform="Netflix"
                />
              </Route>
              <Route path="/Spotify">
                <StreamingPlatformComp
                  color="#1DB954"
                  streamingPlatform="Spotify"
                />
              </Route>
              <Route path="/HBOGO">
                <StreamingPlatformComp
                  color="white"
                  streamingPlatform="HBOGO"
                />
              </Route>
              <Route path="/Disney+">
                <StreamingPlatformComp
                  color="#113CCF"
                  streamingPlatform="Disney+"
                />
              </Route>
              <Route path="/party/:partyID" component={PartyInfo} />
            </Switch>
          )}
        </div>

        <Success />
        <Error />
      </DataContext.Provider>
    </>
  );
}

export default App;
