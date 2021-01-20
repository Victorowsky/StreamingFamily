import "./SignUp.css";
import { useState, useEffect } from "react";
import Button2 from "@material-ui/core/Button";
import { Link  } from "react-router-dom";
import Checkbox from "./Checkbox";
import anime from "animejs/lib/anime.es.js";
import Button from "./Button";
import { useHistory } from "react-router-dom";
import {DataContext} from '../../App';
import { useContext } from "react";
import Cookies from 'js-cookie';



const SignUp = () => {
  const {socket, setIsSuccess, setSuccessMessage, setUserID, setIsError,  setErrorMessage} = useContext(DataContext)

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('')
  const [email, setEmail] = useState('');
  const [checked, setChecked] = useState(false);
  const history = useHistory();


  const [isHover, setIsHover] = useState(false);

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

  useEffect(() => {
    anime({
      targets: ".signInContainer",
      scale: [0, 1],
      duration: 2000,
    });
  }, []);

  const handleSignUp = () => {
    if (name && username && password && email && checkPassword) {
      if (!email.includes("@")) {
        setErrorMessage("Check your email");
        return setIsError(true);
      } else if (!checked) {
        setErrorMessage("Accept everything");
        return setIsError(true);
      } else if (password.length < 6) {
        setErrorMessage("Password is to short");
        return setIsError(true);
      } else if(password !== checkPassword){
        setErrorMessage("Passwords are not the same");
        return setIsError(true);
      }
      socket.emit("SignUpData", {
        name,
        username,
        password,
        email,
      });
    } else {
      setIsError(true);
    }
  };

  socket.on("SignUpAnswer", (answer) => {
    if (answer.success) {
      setIsSuccess(true);
      setName("");
      setUsername("");
      setPassword("");
      setEmail("");
      setSuccessMessage(answer.message);
      Cookies.set('userID', answer.userID, {expires: 3})
      setUserID(answer.userID)
      setTimeout(() => {
        history.push("/");
      }, 1);
    } else {
      setErrorMessage(answer.message);
      setIsError(true);
    }
  });


  socket.on('sendValidationCodeAnswer', ({message, success})=>{
    if(success){
      setSuccessMessage(message)
    }else{
      setErrorMessage(message)
      setIsError(true)
    }

})

  return (
    <>

      <div className="header">
        <Link to="/">
          <Button variant="outlined" text={"Back"} />
        </Link>
      </div>
          <div className="content">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="signInContainer">
              <h1>Create free account</h1>
              <div className="signUp">
                <form autoComplete="off" className="forms">
                  <input
                    autoComplete="nope"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />
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
                   <input
                    autoComplete="off"
                    type="password"
                    name="checkPassword"
                    onChange={(e) => setCheckPassword(e.target.value)}
                    value={checkPassword}
                    placeholder="Repeat password"
                  />
                  <input
                    autoComplete="off"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                  />
                  <Checkbox checked={checked} setChecked={setChecked} />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleSignUp();
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
                    disabled={!checked}
                    style={
                      isHover
                        ? buttonStyleHoverCreateAccount
                        : buttonStyleCreateAccount
                    }
                    onClick={handleSignUp}
                  >
                    Create Account
                  </Button2>
                </form>
              </div>
            </div>
          </div>
        </div>
      


    </>
  );
};

export default SignUp;
