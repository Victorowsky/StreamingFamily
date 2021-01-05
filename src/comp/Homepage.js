import StreamingOffer from "./StreamingOffer";
import Title from "./Title";
import { Link } from "react-router-dom";
import Button from "./SignUp/Button";

const Homepage = ({ userID, nickname }) => {
  return (
    <>
      <div className="header">
        <Link to="/login">
          {!nickname ? <Button text={"Login"} /> : <Button text={nickname} />}
        </Link>
        {!nickname ? (
          <Link to="/signup">
            <Button text={"Sign Up"} />
          </Link>
        ) : (
          <Button text={"Log Out"} />
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
