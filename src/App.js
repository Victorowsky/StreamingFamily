import "./App.css";
import io from "socket.io-client";
import Homepage from "./comp/Homepage";
import { Switch, Route, Link } from "react-router-dom";
import Netflix from "./comp/Netflix";
import Spotify from "./comp/Spotify";
// import HBOGO from "./comp/HBOGO";
// import Disney from "./comp/Disney";
import { useEffect } from "react";
import SignUp from "./comp/SignUp/SignUp";
import ButtonSignUp from "./comp/SignUp/ButtonSignUp";
import { Button } from "@material-ui/core";

const socket = io("http://localhost:3001/");

function App() {
  useEffect(() => {}, []);

  const buttonStyle = {
    color: "white",
    borderColor: "white",
    width: "fit-content",
    alignSelf: "center",
  };

  return (
    <>
      <div className="app">
        <div className="header">
          <Route path='/signup'  exact>
            <Link to="/">
            <Button variant="outlined" style={buttonStyle}>
              Back
            </Button>
          </Link>
          </Route>
          
          <Route path="/" exact>
          <Link to="/signup">
            <ButtonSignUp />
          </Link>
          </Route>

        </div>

        <div className="content">
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/signup" exact>
              <SignUp socket={socket} />
            </Route>
            <Route path="/netflix" component={Netflix} />
            <Route path="/Spotify" component={Spotify} />
            {/* <Route path="/HBO GO" component={HBOGO} /> */}
            {/* <Route path="/Disney+" component={Disney} /> */}
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;
