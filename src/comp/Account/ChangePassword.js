import { useEffect, useState } from "react";
import Button from "../SignUp/Button";
import "./ChangePassword.css";
import { DataContext } from "../../App";
import { useContext } from "react";

const ChangePassowrd = () => {
  const {
    socket,
    userID,
    setIsSuccess,
    setSuccessMessage,
    setIsError,
    setErrorMessage,
  } = useContext(DataContext);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [code, setCode] = useState("");
  const [changePasswordClicked, setChangePasswordClicked] = useState(false)
  const handleChangePassword = (e) => {
    e.preventDefault();
    if (userID && oldPassword && newPassword && code) {
      socket.emit("changePassword", { userID, oldPassword, newPassword, code });
    } else {
      setIsError(true);
      setErrorMessage("Check it one more time");
    }
  };

// REQUEST TO GENERATE CODE TO CHANGE PASSWORD
  const changePasswordCode = () =>{
      socket.emit('changePasswordCode', {userID})
      setChangePasswordClicked(true)
  }




  useEffect(()=>{
  socket.on('changePasswordCodeAnswer', ({message, success})=>{
    if(success){
        setIsSuccess(success)
        setSuccessMessage(message)
    }
  })
  

  socket.on("changePasswordAnswer", ({ message, success }) => {
    if (success) {
      setIsSuccess(success);
      setSuccessMessage(message);
      setOldPassword("");
      setNewPassword("");
      setCode('')
    } else {
      setIsError(true);
      setErrorMessage(message);
    }
  });

  return ()=>{
    socket.off('changePasswordAnswer')
    socket.off('changePasswordCodeAnswer')
  }
  },[setErrorMessage, setIsError, setIsSuccess, setSuccessMessage, socket])

  const divStyle = { width: "fit-content", height:'fit-content', alignSelf:'center', padding:'15px 20px',backgroundColor:'transparent' }

  return (
    <>


      <div className="changePassword">
          <h2>CHANGE PASSWORD</h2>
        {changePasswordClicked ?
        <form>
        <input
          type="password"
          value={oldPassword}
          onChange={(e) => {
            setOldPassword(e.target.value);
          }}
          placeholder="Old password"
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          placeholder="New password"
        />
         <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
          placeholder="Code from email"
        />
        <div style={{ width: "fit-content"}}>
        <Button
              onClick={handleChangePassword}
              style={{width:'100%'}}
              text='Change password'/>
          <button
            style={{ display: "none" }}
            onClick={handleChangePassword}
            type="submit"
          ></button>
        </div>
      </form>
        :
        <div style={divStyle}>
        <Button text={'Send code to email!'} onClick={changePasswordCode}/> 
 </div>
        }
      </div>
    </>
  );
};

export default ChangePassowrd;
