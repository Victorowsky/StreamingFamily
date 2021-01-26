import { useEffect, useState } from "react";
import Button from "../SignUp/Button";
import "./RemindPassword.css";
import { DataContext } from "../../App";
import { useContext } from "react";
import {useParams, useHistory} from "react-router-dom"

const RemindPassword = () => {

    const history = useHistory()
    const {code} = useParams()

  const {
    socket,
    // userID,
    setIsSuccess,
    setSuccessMessage,
    setIsError,
    setErrorMessage
  } = useContext(DataContext);

  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [tempUserID, setTempUserID] = useState('')

//   const [code, setCode] = useState("");

// REQUEST TO GENERATE CODE TO CHANGE PASSWORD

  useEffect(()=>{
    socket.emit('remindPasswordCheckCode',{code})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  socket.on('remindPasswordCheckCodeAnswer', ({success, userID})=>{
      if(!success){
        history.push('/')
      }else{
 
        setTempUserID(userID)

      }
  })

  const handlePasswordChange = () =>{
      if(password === passwordConfirm && tempUserID){
        socket.emit('remindPasswordChange', {userID: tempUserID, password}) 
      }else if(password !== passwordConfirm){
          setIsError(true)
          setErrorMessage('Passwords are not the same')
      }
  } 

  socket.on('remindPasswordChangeAnswer', ({message, success})=>{
      if(success){
          setIsSuccess(true)
          setSuccessMessage(message)
          setPassword('');
          setTimeout(() => {
          history.push('/')
          }, 1);
      }else{
          setIsError(true)

      }
  })

    

  return (
    <>
      <div className="remindPassword">
          <h2>CHANGE PASSWORD</h2>
        <form>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        <input
          type="password"
          value={passwordConfirm}
          onChange={(e) => {
            setPasswordConfirm(e.target.value);
          }}
          placeholder="Confirm password"
        />
  
        <div style={{ width: "fit-content"}}>
        <Button
              onClick={handlePasswordChange}
              style={{width:'100%'}}
              text='Change password'/>
          <button
            style={{ display: "none" }}
            onClick={(e)=>{
                e.preventDefault()
                handlePasswordChange(e)}}
            type="submit"
          ></button>
        </div>
      </form>
      
      </div>
    </>
  );
};

export default RemindPassword;
