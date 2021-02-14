import { useEffect, useState } from "react";
import Button from "../SignUp/Button";
import "./ChangeEmail.css";
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
  const [newEmail, setNewEmail] = useState("");
  const [code, setCode] = useState("");
  const [changeEmailClicked, setChangeEmailClicked] = useState(false)


  const handleChangeEmail = (e) => {
    e.preventDefault();
    if (userID && newEmail && code) {
       if(newEmail.includes('@')){
        socket.emit("changeEmail", { userID, newEmail, code });

       } else{
           setIsError(true)
           setErrorMessage('Check your new email!')
       }
    } else {
      setIsError(true);
      setErrorMessage("Check it one more time");
    }
  };
// REQUEST TO GENERATE CODE TO CHANGE EMAIL
  const changeEmailCode = () =>{
        socket.emit('changeEmailCode', {userID})
        setChangeEmailClicked(true)
  }



  useEffect(()=>{

  socket.on('changeEmailCodeAnswer', ({message, success})=>{
    if(success){
        setIsSuccess(success)
        setSuccessMessage(message)
    }
  })
  

  socket.on("changeEmailAnswer", ({ message, success }) => {
    if (success) {
      setIsSuccess(success);
      setSuccessMessage(message);
      setNewEmail("");
      setCode('')
    } else {
      setIsError(true);
      setErrorMessage(message);
    }
  });

  return ()=>{
    socket.off('changeEmailCodeAnswer')
    socket.off('changeEmailAnswer')
  }
  },[setErrorMessage, setIsError, setIsSuccess, setSuccessMessage, socket])

  const divStyle = { width: "fit-content", height:'fit-content', alignSelf:'center', padding:'15px 20px',backgroundColor:'transparent' }

  return (
    <>


      <div className="changeEmail">
          <h2>CHANGE EMAIL</h2>
        {changeEmailClicked ?
        <form>
        <input
          type="text"
          value={newEmail}
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
          placeholder="New email"
        />
         <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
          }}
          placeholder="Code from email"
        />
        <div style={{ width: "fit-content" }}>
        <Button
              onClick={handleChangeEmail}
              style={{width:'100%'}}
              text='Change password'/>
          <button
            style={{ display: "none" }}
            onClick={handleChangeEmail}
            type="submit"
          ></button>
        </div>
      </form>
        :
        <div style={divStyle}>
        <Button text={'Send code to email!'} onClick={changeEmailCode}/> 
 </div>
        }
      </div>
    </>
  );
};

export default ChangePassowrd;
