import { useState } from "react";
import Button from '../SignUp/Button';
import Success from './SuccessSnackbar';
import {Redirect} from 'react-router-dom';



const ConfirmAccount = ({socket, userID,setRefreshData}) => {


    const [ValidateToken, setValidateToken] = useState('')
    const [isSuccess, setIsSuccess] = useState(false)
    const [redirect, setRedirect] = useState(false)


    const handleSendCode= (e) =>{
        e.preventDefault()
    if(ValidateToken){
        socket.emit('sendValidationCode', {userID, ValidateToken})
    }}

    socket.on('sendValidationCodeAnswer', ({message, success})=>{
        setIsSuccess(success)
        setRefreshData(prev=> prev+1)
        setTimeout(() => {
            setRedirect(success)
        }, 1500);
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
        <Success isSuccess={isSuccess} setIsSuccess={setIsSuccess} successMessage={'Account activated!'}/>
        </>
     );
}
 
export default ConfirmAccount;