import "./App.css";
import io from "socket.io-client";
import Homepage from "./comp/Homepage";
import { Switch, Route } from "react-router-dom";
import Netflix from "./comp/Netflix";
import Spotify from "./comp/Spotify";
// import HBOGO from "./comp/HBOGO";
// import Disney from "./comp/Disney";
import { useState } from "react";
import SignUp from "./comp/SignUp/SignUp";
import Login from "./comp/Login/Login";

const socket = io("http://localhost:3001/");

function App() {
  const [userID, setUserID] = useState();
  const [nickname, setNickname] = useState();

  return (
    <>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Homepage userID={userID} nickname={nickname} />
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
