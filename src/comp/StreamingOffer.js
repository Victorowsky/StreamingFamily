import { useState } from "react";
import { Link } from "react-router-dom";

const StreamingOffer = ({ name, color }) => {
  const [isHovered, setIsHovered] = useState();

  const hoverStyle = {
    boxShadow: `2px 2px 20px ${color}`,
    borderColor: color,
  };
  const style = {};

  return (
    <>
      <Link to={name}>
        <div
          className="square"
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={isHovered ? hoverStyle : style}
        >
          {name}
        </div>
      </Link>
    </>
  );
};

export default StreamingOffer;
