import React, { useContext, useRef, useState } from 'react';
import Login from './Login/Login';
import {Link} from 'react-router-dom'
import Button from './SignUp/Button';
import {DataContext} from "../App"

import "./LoginPage.css"

const LoginPage = () => {

    const {socket, setIsSuccess,setIsError, setSuccessMessage} = useContext(DataContext)
    const forgotPasswordCompRef = useRef()
    const [forgotPasswordComp, setForgotPasswordComp] = useState(false)
    const [email, setEmail] = useState('');

    const handleCloseForgotPasswordComp = (e) =>{
        if(forgotPasswordCompRef.current){
            if (!forgotPasswordCompRef.current.contains(e.target)) {
                setForgotPasswordComp(false);
              }
        }
    }

    const handleSendForgotPasswordEmail = () =>{
        if(email.includes('@')){
            socket.emit('forgotPasswordCode', {email})
            setEmail('')
            setForgotPasswordComp(false)
        }
    }

    socket.on('forgotPasswordCodeAnswer', ({message,success})=>{
        if(success){
            setIsSuccess(true)
            setSuccessMessage(message)
        }else{
            setIsError(true)
        }
    })



    return ( 
        <div onClick={(e)=>{handleCloseForgotPasswordComp(e)}}
         className="firstComp">
            <div className="welcomeText">
               <h1 className="streamingFamily">Streaming Family</h1>
               <p>First website where you can find people to share your accounts!</p>
            </div>
            <div className="loginContainerFirst">
            <Login turnOffBack="true"/>
            <div className="createAccount">
                <h2>Don't have account?</h2>
                <Link to="/signup">
                <p>Register now for free!</p>
                </Link>
                <hr/>
                <p 
                className="forgotPasswordParagraph"
                onClick={()=>setForgotPasswordComp(true)}
                >Forgot password?</p>
            </div>
            </div>

        {/* ENTER EMAIL COMPONENT TO FORGOT PASSWORD */}
            {forgotPasswordComp && 
            <div ref={forgotPasswordCompRef} className="forgotPasswordComp">

                <form autoComplete="off" className="forms">
                <h2>Enter your account email</h2>
                <input
                  autoComplete="off"
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Enter your email"
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSendForgotPasswordEmail()
                  }}
                  style={{ display: "none" }}
                  type="submit"
                ></button>
                    <div style={{width:'fit-content'}}>
                <Button 
                onClick={()=>{handleSendForgotPasswordEmail()}}
                style={{color:'black', borderColor:'black'}} text='Send Code'/> 
                    </div>

                
              </form>
            </div>
            }
            {/* END OF FORGOT COMPONENT  */}
        </div>
     );
}
 
export default LoginPage;