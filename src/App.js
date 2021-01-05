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

const socket = io("http://localhost:3001/");

function App() {
  const [userID, setUserID] = useState();
  const [nickname, setNickname] = useState();

  const handleCookies = () => {
    if (Cookies.get("userID")) {
      setUserID(Cookies.get("userID"));
      setTimeout(() => {
        socket.emit("CheckUserID", userID);
      }, 1);
    }
  };

  socket.on("CheckUserIDAnswer", (nickname) => {
    setNickname(nickname);
  });

  useEffect(() => {
    handleCookies();
  });

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
            />
          </Route>
          <Route path="/signup" exact>
            <SignUp socket={socket} />
          </Route>
          <Route path="/login">
            <Login
              socket={socket}
              setUserID={setUserID}
              setNickname={setNickname}
            />
          </Route>
          <Route path="/netflix" component={Netflix} />
          <Route path="/Spotify" component={Spotify} />
          {/* <Route path="/HBO GO" component={HBOGO} /> */}
          {/* <Route path="/Disney+" component={Disney} /> */}
        </Switch>
      </div>
    </>
  );
}

export default App;
