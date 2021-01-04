import "./SignUp.css";
import { useState } from "react";
import ButtonSignUp from "./ButtonSignUp";
import Button from "@material-ui/core/Button";
import Error from "./ErrorSnackbar";

const SignUp = ({ socket }) => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [SignUpAnswer, setSignUpAnswer] = useState(false);

  const [isHover, setIsHover] = useState(false);

  const buttonStyle = {
    borderColor: "black",
    width: "fit-content",
    alignSelf: "center",
  };

  const buttonStyleHover = {
    borderColor: "#4361ee",
    width: "fit-content",
    alignSelf: "center",
    backgroundColor: "#4361ee",
  };

  const handleSignUp = () => {
    if (name && username && password && email) {
      if (!email.includes("@")) {
        console.log("Bład");
        return false;
      }

      socket.emit("SignUpData", {
        name,
        username,
        password,
        email,
      });
      setName("");
      setUsername("");
      setPassword("");
      setEmail("");
    }
  };


  socket.on("SignUpAnswer", (answer) => {
    setSignUpAnswer(answer.success);
  });

  return (
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
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSignUp();
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
              style={isHover ? buttonStyleHover : buttonStyle}
              onClick={handleSignUp}
            >
              Create Account
            </Button>
          </form>
        </div>
      </div>
      <Error SignUpAnswer={SignUpAnswer} />
    </div>
  );
};

export default SignUp;
