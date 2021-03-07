import Party from "./Party";
import { Link } from "react-router-dom";
import Button from "./SignUp/Button";
import { DataContext } from "../App";
import { useContext, useEffect, useRef, useState } from "react";
import Progress from "./Progress";
import "./StreamingPlatformComp.css";

const StreamingPlatformComp = ({color, streamingPlatform}) => {
  const [isCreatePartyContainer, setIsCreatePartyContainer] = useState(false);
  const [text, setText] = useState('');
  const [maxUsers, setMaxUsers] = useState('');
  const [partiesData, setPartiesData] = useState([]);

  const {
    handleCreateParty,
    userID,
    socket,
    setIsSuccess,
    setIsError,
    setSuccessMessage,
    setErrorMessage,
    nickname,
  } = useContext(DataContext);
  const [partyName, setPartyName] = useState(`${nickname}'s party`);


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

    return ()=>{
      setPartiesData([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  useEffect(()=>{
      socket.on("getParitesDataAnswer", (docs) => {
    setPartiesData(docs);
  });
  // WHEN SOMEONE WILL ADD NEW PARTY
  socket.on("newPartyAddedAnswer", ({ addedParty }) => {
    if (addedParty.streamingPlatform === streamingPlatform) {
      setPartiesData([...partiesData, addedParty]);
    }
  });

  socket.on("joinPartyAnswer", ({ message, success }) => {
    
    if (success) {
      setIsSuccess(true);
      setSuccessMessage(message);
    } else {
      setIsError(true);
      setErrorMessage(message);
    }
  });

  socket.on('updateParty', ({partyChanged})=>{
    let deletedIndex;
    const oldPartiesData = partiesData.filter((party, index)=>{
      if(party._id === partyChanged._id){
        deletedIndex = index
      }
     return party._id !== partyChanged._id
    });
    oldPartiesData.splice(deletedIndex, 0, partyChanged)
    setPartiesData(oldPartiesData)
  })


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

  return ()=>{
    socket.removeAllListeners('createPartyAnswer')
    socket.removeAllListeners('updateParty')
    socket.removeAllListeners('joinPartyAnswer')
    socket.removeAllListeners('newPartyAddedAnswer')
    socket.removeAllListeners('getParitesDataAnswer')

  }
  },[partiesData, setErrorMessage, setIsError, setIsSuccess, setSuccessMessage, socket, streamingPlatform])


  const list = partiesData.map((party) => (
    <Party
      join={true}
      key={party._id}
      partyID={party._id}
      name={party.partyName}
      text={party.textContent}
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
        <div className="streamingContent">
          <div className="partiesContainer">
            <h1>{streamingPlatform} Families</h1>
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
                max={5}
                min={1}
                placeholder="How many friends"
                onChange={(e) => setMaxUsers(e.target.value)}
                value={maxUsers}
              />
              <button onClick={(e)=>{
                e.preventDefault()
                handleCreateParty(userID, partyName, text, maxUsers,streamingPlatform)
              }} style={{display:'none'}} type="submit"></button>
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

export default StreamingPlatformComp;
