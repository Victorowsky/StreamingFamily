const Message = ({time, nickname, message, myMessage}) => {


    return (
        <>
        {myMessage ? 
                <div title={time} style={{alignSelf:'flex-end'}}>
                <p style={{borderRadius:'20px 20px 0px 20px'}}>{message}</p>
                </div> 
        : 
                <div title={time}>
                <p><span>{nickname} : </span> {' '}{message}</p>
                </div>
                }
        
        </>
     );
}
 
export default Message;