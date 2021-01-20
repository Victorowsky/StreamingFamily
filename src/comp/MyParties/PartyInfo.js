import "./PartyInfo.css"
import {DataContext} from '../../App';
import {useParams} from "react-router-dom";
import { useContext,useEffect,useRef,useState } from 'react';
import Button from '../SignUp/Button'
import {Link} from 'react-router-dom'
import Loading from '../Loadings/Loading';
import Avatar from '@material-ui/core/Avatar';
import Chat from './Chat';
import { useHistory } from "react-router-dom";



const PartyInfo = (props) => {
    const {partyID} = useParams()
    const {socket, nickname, setIsError, setErrorMessage, userID,setIsSuccess, setSuccessMessage} = useContext(DataContext)
    const history = useHistory()


    const [partyData, setPartyData] = useState()
    const [message, setMessage] = useState('')

    useEffect(()=>{
        if(partyID && nickname){
            socket.emit('getParty', {partyID, nickname}) 
        }
    },[nickname, partyID, socket])


    socket.on('getPartyAnswer', ({docs, success,message})=>{
        if(success){
            setPartyData(docs)
        }else{
            setIsError(true)
            setErrorMessage(message)
        }
    })

    socket.on(`messageAnswer${partyID}`, (docs)=>{
        setPartyData(docs)
    })


    const handleSendMessage = (e) =>{
        if(e){
            e.preventDefault()
        }
        if(message && partyID && nickname){
            socket.emit('messageSend', {message, partyID, nickname})
        }   
        setMessage('')
    }

    const handleLeaveParty = () =>{
        socket.emit('leaveParty', {nickname, partyID, userID})
    }
    
    socket.on('leavePartyAnswer', ({message, success})=>{
        if(success){
            setIsSuccess(true)
            setSuccessMessage(message)
            history.push('/')
        }else{
            setIsError(true)
            setErrorMessage('Error')
        }
    })

    


    let createUsersAvatars;
    if(partyData){
            createUsersAvatars = partyData.users.map((user, index) =>{
   return(
       <Avatar key={index} style={{color:'black', border: '1px solid white'}} title={user}>{user[0].toUpperCase()}</Avatar>
   )})
    }
    return ( 
        <>
        <div className="header">
        <Link to="/myParties">
          <Button variant="outlined" text={"Back"} />
        </Link>
      </div>
       {partyData ?
           <div className="partyInfoContainer">
            <div className="partyInfo">
                <div className="partyName">
                    <div className="info">
                            <h1>{partyData.partyName}</h1>
                            <span className="partyName__createdBy">
                                Created by: {partyData.creatorUsername} | {partyData.dateCreated}
                            </span>
                    </div>
                    
                        <div className="leaveButton">
                            <Button onClick={handleLeaveParty} text={'LEAVE PARTY'}/>
                        </div>
                        
                </div>

                <div className="partyUsers">

                </div>
                <div className="chatAndUsersContainer">
                        <div className="chatContainer">
                                <Chat chat={partyData.chat} />
                                <form>
                                <input type="text" value={message}
                                onChange={(e)=>setMessage(e.target.value)}
                                placeholder='Send a message'
                                />
                                <button onClick={(e)=>handleSendMessage(e)} type="submit" style={{display:'none'}}></button>
                                </form>
                        
                    </div>
                    {/* <div className="userListContainer">
                        {createUsersAvatars}
                    </div> */}
                </div>
                
                
            </div>
        
    
        </div> : 
        <div className="partyInfoLoading">
        <Loading/>
        </div>

       } 
        </>
     );
}
 
export default PartyInfo;
