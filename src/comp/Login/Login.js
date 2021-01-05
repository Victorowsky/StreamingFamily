// import "./SignUp.css";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Error from "../SignUp/ErrorSnackbar";
import Success from "../SignUp/SuccessSnackbar";
import { Link, useHistory } from "react-router-dom";
import anime from "animejs/lib/anime.es.js";

const SignUp = ({ socket, setUserID, setNickname }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const history = useHistory();
  const [isHover, setIsHover] = useState(false);
  const [isHoverBack, setIsHoverBack] = useState(false);

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

  const buttonStyleBack = {
    color: "white",
    borderColor: "white",
    width: "fit-content",
    alignSelf: "center",
  };

  const buttonStyleHoverBack = {
    color: "white",
    borderColor: "white",
    width: "fit-content",
    alignSelf: "center",
    boxShadow: "2px 2px 10px white",
  };

  useEffect(() => {
    anime({
      targets: ".signInContainer",
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
    } else {
      setErrorMessage("Check your details again");
      setIsError(true);
    }
  };

  socket.on("LoginAnswer", (answer) => {
    if (answer.success) {
      setUserID(answer.userID);
      setNickname(username);
      setUsername("");
      setPassword("");
      setIsSuccess(true);
      setSuccessMessage(answer.message);
      setTimeout(() => {
        history.push("/");
      }, 1500);
    } else {
      setErrorMessage(answer.message);
      setIsError(true);
    }
  });

  return (
    <>
      <div className="header">
        <Link to="/">
          <Button
            onMouseOver={() => {
              setIsHoverBack(true);
            }}
            onMouseLeave={() => {
              setIsHoverBack(false);
            }}
            variant="outlined"
            style={isHoverBack ? buttonStyleHoverBack : buttonStyleBack}
          >
            Back
          </Button>
        </Link>
      </div>
      <div className="content">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="signInContainer">
            <h1>Log in to your account</h1>
            <div className="signUp">
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
                <Button
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
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Error
        setIsError={setIsError}
        isError={isError}
        errorMessage={errorMessage}
      />
      <Success
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
        successMessage={successMessage}
      />
    </>
  );
};

export default SignUp;
