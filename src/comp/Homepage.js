import StreamingOffer from "./StreamingOffer";
import Title from "./Title";
import { Link } from "react-router-dom";
import Button from "./SignUp/Button";
import Cookies from "js-cookie";
import {DataContext} from '../App';
import { useContext } from "react";


const Homepage = () => {
const {nickname, setUserID, setUserData, setNickname} = useContext(DataContext)


  const handleLogOut = () => {
    setNickname(null);
    setUserID(null);
    Cookies.remove("userID");
    setUserData(null)
  };

  return (
    <>
      <div className="header">
        {!nickname ? (
          <Link to="/login">
            <Button text={"Login"} />
          </Link>
        ) : (
          <Link to="/account">
            <Button text={nickname} />
          </Link>
        )}

        {!nickname ? (
          <Link to="/signup">
            <Button text={"Sign Up"} />
          </Link>
        ) : (
          <Button text={"LogOut"} onClick={handleLogOut} />
        )}
      </div>

      <div className="content">
        <div className="homepage">
          <Title />
          <div className="streamingOffers">
            <StreamingOffer name="Netflix" color="#e50914" />
            <StreamingOffer name="Spotify" color="#1DB954" />
            <StreamingOffer name="HBO GO" color="white" />
            <StreamingOffer name="Disney+" color="#113CCF" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
