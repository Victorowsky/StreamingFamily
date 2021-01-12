import Party from "./Party";
import { Link } from "react-router-dom";
import Button from "./SignUp/Button";
import { DataContext } from "../App";
import { useContext, useEffect, useRef, useState } from "react";
import Progress from "./Progress";
import "./Netflix.css";

const Netflix = () => {
  const color = "#e50914";

  const streamingPlatform = "Netflix";
  const [isCreatePartyContainer, setIsCreatePartyContainer] = useState(false);
  const [partyName, setPartyName] = useState();
  const [text, setText] = useState();
  const [maxUsers, setMaxUsers] = useState();
  const [partiesData, setPartiesData] = useState([]);

  const {
    handleCreateParty,
    userID,
    socket,
    setIsSuccess,
    setIsError,
    setSuccessMessage,
    setErrorMessage,
  } = useContext(DataContext);

  const createPartyContainer = useRef();

  const handleCloseContainer = (e) => {
    if (isCreatePartyContainer) {
      if (!createPartyContainer.current.contains(e.target)) {
        setIsCreatePartyContainer(false);
      }
    }
  };

  useEffect(() => {
    socket.emit("getPartiesData", streamingPlatform);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  socket.on("getParitesDataAnswer", (docs) => {
    setPartiesData(docs);
  });
  // WHEN SOMEONE WILL ADD NEW PARTY
  socket.on("newPartyAdded", ({ addedParty }) => {
    if (addedParty.streamingPlatform === streamingPlatform) {
      setPartiesData([...partiesData, addedParty]);
    }
  });

  socket.on("joinPartyAnswer", ({ message, success, partyChanged }) => {
    if (success) {
      setIsSuccess(true);
      setSuccessMessage(message);
      let deletedIndex;
      const oldPartiesData = partiesData.filter((party, index)=>{
        if(party._id === partyChanged._id){
          deletedIndex = index
        }
       return party._id !== partyChanged._id
      });
      oldPartiesData.splice(deletedIndex, 0, partyChanged)
      setPartiesData(oldPartiesData)
    } else {
      setIsError(true);
      setErrorMessage(message);
    }
  });

  socket.on("createPartyAnswer", ({ message, success }) => {
    if (success) {
      setIsSuccess(true);
      setSuccessMessage(message);
      setPartyName("");
      setText("");
      setMaxUsers("");
      setIsCreatePartyContainer(false);
    } else {
      setIsError(true);
      setErrorMessage(message);
    }
  });

  const list = partiesData.map((party) => (
    <Party
      key={party._id}
      partyID={party._id}
      name={party.partyName}
      users={party.users}
      maxUsers={party.maxUsers}
      creator={party.creatorUsername}
      dateCreated={party.dateCreated}
      color={color}
    />
  ));

  return (
    <>
      <div onClick={handleCloseContainer} style={{ height: "100%" }}>
        <div className="header">
          <Link to="/">
            <Button variant="outlined" text={"Back"} />
          </Link>
        </div>
        <div className="netflixContent">
          <div className="partiesContainer">
            <h1>Netflix Families</h1>
            <Button
              text={"Create own party"}
              onClick={() => {
                setIsCreatePartyContainer((prev) => !prev);
              }}
            />

            {list ? <div className="Parties">{list}</div> : <Progress />}
          </div>
        </div>

        {isCreatePartyContainer && (
          <div className="createPartyContainer" ref={createPartyContainer}>
            <form>
              <input
                ref={createPartyContainer}
                type="text"
                placeholder="Party name"
                onChange={(e) => setPartyName(e.target.value)}
                value={partyName}
              />

              <input
                ref={createPartyContainer}
                type="text"
                placeholder="Text"
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <input
                type="number"
                style={{ width: "263px" }}
                max={4}
                min={1}
                placeholder="How many friends"
                onChange={(e) => setMaxUsers(e.target.value)}
                value={maxUsers}
                // style={{width:"100%"}}
              />
              {/* <button onClick={(e)=> handleCreateParty(userID, partyName, text, maxUsers,e)} style={{display:'none'}} type="submit"></button> */}
              <Button
                text="Create"
                onClick={() =>
                  handleCreateParty(
                    userID,
                    partyName,
                    text,
                    maxUsers,
                    streamingPlatform
                  )
                }
              />
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Netflix;
