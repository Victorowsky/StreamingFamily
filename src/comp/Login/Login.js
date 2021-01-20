import "./Login.css";
import { useEffect, useState } from "react";
import Button2 from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";
import Button from "../SignUp/Button";
import Cookies from "js-cookie";
import {DataContext} from '../../App';
import { useContext } from "react";
import Loading from '../Loadings/Loading';

const Login = () => {
const {socket, setUserID, setNickname,setIsSuccess,setSuccessMessage, setIsError, setErrorMessage} = useContext(DataContext)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [isHover, setIsHover] = useState(false);
  const [isLoading, setIsLoading] = useState(false)


  const buttonStyleCreateAccount = {
    marginTop: "5px",
    color: "black",
    borderColor: "black",
    width: "fit-content",
    alignSelf: "center",
  };

  const buttonStyleHoverCreateAccount = {
    marginTop: "5px",
    borderColor: "#4361ee",
    width: "fit-content",
    alignSelf: "center",
    backgroundColor: "#4361ee",
  };

  const handleCookies = (ID) => {
    Cookies.set("userID", ID, { expires: 3 });
  };

  useEffect(() => {
    anime({
      targets: ".loginContainer",
      scale: [0, 1],
      duration: 2000,
    });
  }, []);

  const handleLogin = () => {
    if (username && password) {
      socket.emit("Login", {
        username,
        password,
      });
      setIsLoading(true)
    } else {
      setErrorMessage("Check your details again");
      setIsError(true);
    }
  };

  socket.on("LoginAnswer", (answer) => {
    if (answer.success) {
      setNickname(username);
      setUsername("");
      setPassword("");
      setIsSuccess(true);
      setSuccessMessage(answer.message);
      handleCookies(answer.userID);
      setUserID(answer.userID);
      setTimeout(() => {
        history.push("/");
      }, 1);
      setIsLoading(false)
    } else {
      setErrorMessage(answer.message);
      setIsError(true);
      setIsLoading(false)
    }
  });

  return (
    <>
      <div className="header">
        <Link to="/">
          <Button variant="outlined" text={"Back"} />
        </Link>
      </div>
      <div className="loginContent">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="loginContainer">
            <h1>Log in to your account</h1>
            <div className="login">
              <form autoComplete="off" className="forms">
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
                <input
                  autoComplete="off"
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                  style={{ display: "none" }}
                  type="submit"
                ></button>
                <Button2
                  onMouseOver={() => setIsHover(true)}
                  onMouseOut={() => {
                    setIsHover(false);
                  }}
                  variant="outlined"
                  style={
                    isHover
                      ? buttonStyleHoverCreateAccount
                      : buttonStyleCreateAccount
                  }
                  onClick={handleLogin}
                >
                  Login
                </Button2>
              </form>
            </div>
          </div>
        </div>
        <div className="loadingContainer">
                {isLoading &&  <Loading/>}
        </div>

      </div>
    </>
  );
};

export default Login;
