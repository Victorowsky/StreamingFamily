import StreamingOffer from "./StreamingOffer";
import Title from "./Title";

const Homepage = () => {
  return (
    <div className="homepage">
      <Title />
      <div className="streamingOffers">
        <StreamingOffer name="Netflix" color="#e50914" />
        <StreamingOffer name="Spotify" color="#1DB954" />
        <StreamingOffer name="HBO GO" color="white" />
        <StreamingOffer name="Disney+" color="#113CCF" />
      </div>
    </div>
  );
};

export default Homepage;
