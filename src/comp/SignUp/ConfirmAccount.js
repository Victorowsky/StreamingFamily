import { useContext, useState } from "react";
import Button from '../SignUp/Button';
import {Redirect} from 'react-router-dom';
import {DataContext} from '../../App';



const ConfirmAccount = () => {

    const {socket, userID, setIsSuccess, setIsError,setErrorMessage, setSuccessMessage} = useContext(DataContext)


    const [ValidateToken, setValidateToken] = useState('')
    const [redirect, setRedirect] = useState(false)


    const handleSendCode= (e) =>{
        e.preventDefault()
        if(ValidateToken){
        socket.emit('sendValidationCode', {userID, ValidateToken})
    }}

    socket.on('sendValidationCodeAnswer', ({message, success})=>{
        if(success){
        setIsSuccess(success)
        setSuccessMessage(message)
        setRedirect(success)
        }else{
            setIsError(true)
            setErrorMessage(message)
        }
    })



    return ( 
        <>
      {redirect ?  <Redirect to="/"/> : false} 
        <div className='confirmAccount'>
            <h1>Confirm your account</h1>
            <form>
                <input type="text" placeholder="Put code from your email" onChange={(e)=>setValidateToken(e.target.value)} value={ValidateToken}/>
                <button style={{display:'none'}} onClick={(e)=>{handleSendCode(e)}} type="submit"></button>
                
            </form>
            <Button text={'Confirm'} onClick={handleSendCode}/>

        </div>
        </>
     );
}
 
export default ConfirmAccount;