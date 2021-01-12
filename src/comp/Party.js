import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { useRef, useState, useContext } from "react";
import {DataContext} from "../App"

import "./Party.css";




const Party = ({ name, users, maxUsers, color,dateCreated,creator,partyID }) => {
  const [isHovered, setIsHovered] = useState();
const {userID, socket} = useContext(DataContext)


  const hoverStyle = {
    boxShadow: `0px 0px 20px ${color}`,
    borderColor: color,
  };

  const style = {};
  const joinButton = useRef()



  const joinParty = () =>{
   const partyID = joinButton.current.dataset.id
    socket.emit('joinParty', {userID, partyID})
  }


  return (
    <div
      className="party"
      style={isHovered ? hoverStyle : style}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >


      <h1>{name}</h1>

      <div 
      style={{display:'flex', flexDirection:'column', width:'fit-content', alignSelf:'center'}}

      >
        <IconButton 
        onClick={joinParty}
        data-id={partyID} 
        ref={joinButton} 
        style={{ color: "white" }}>
          <AddIcon style={{ color: "white", fontSize: "50px" }} />
        </IconButton>
        JOIN
      </div>

      <h2>
        Users: {users.length}/{maxUsers}
      </h2>
      <span>Created: {dateCreated}</span>
      <span>Created by: {creator}</span>
    </div>
  );
};

export default Party;
