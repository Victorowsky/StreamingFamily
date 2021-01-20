import "./Chat.css"
import {DataContext} from "../../App"
import { useContext, useEffect, useRef } from "react";
import Message from './Message';


const Chat = ({chat}) => {
    const {nickname} = useContext(DataContext)

    const chatRef = useRef()

          const createMessages = chat.map((message,index)=>{
              let myMessage = false;
            if(message.nickname === nickname){
                myMessage = true;
            }
            return (
            <Message key={index} index={index} myMessage={myMessage} nickname={message.nickname} message={message.message} time={message.time}/>
            )  
            
            })  


        useEffect(()=>{

            // AUTO SCROLL TO BOTTOM WHEN SOMEONE WRITE MESSAGE
            chatRef.current.scrollTo({top:chatRef.current.scrollHeight})
        },[chat])
   


    return ( 
        <div ref={chatRef} className="chat" >
           {createMessages ? createMessages : "There are no messages"} 
        </div>
     );
}
 
export default Chat;    