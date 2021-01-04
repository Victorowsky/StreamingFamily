import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";

import "./Party.css";
const Party = ({ name, users, maxUsers, color }) => {
  const [isHovered, setIsHovered] = useState();

  const hoverStyle = {
    boxShadow: `2px 2px 20px ${color}`,
    borderColor: color,
  };
  const style = {};

  return (
    <div
      className="party"
      style={isHovered ? hoverStyle : style}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconButton style={{ color: "white" }}>
        <AddIcon style={{ color: "white", fontSize: "50px" }} />
      </IconButton>
      <h2>
        Users: {users}/{maxUsers}
      </h2>
      <h1>{name}</h1>
    </div>
  );
};

export default Party;
