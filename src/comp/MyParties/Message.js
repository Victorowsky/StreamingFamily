const Message = ({time, nickname, message, myMessage}) => {


    return (
        <>
        {myMessage ?
                <div title={time} style={{alignSelf:'flex-end'}}>
                <p style={{borderRadius:'20px 20px 0px 20px'}}>{message}</p>
                </div> 
                
        : 
                <>
                {/* MADE FOR USER LEFT PARTY */}
                {nickname === "" ? 
                <div title={time}>
                <p style={{color:'grey',borderColor:'grey'}}>{message}</p>
                </div>
                :
                <div title={time}>
                <p><span>{nickname} : </span> {' '}{message}</p>
                </div>
                }
                
                </>
                }
        
        </>
     );
}
 
export default Message;