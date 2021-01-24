import StreamingOffer from "./StreamingOffer";
import Title from "./Title";
import { Link } from "react-router-dom";
import Button from "./SignUp/Button";
import Cookies from "js-cookie";
import {DataContext} from '../App';
import { useContext, useEffect, useState } from "react";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { IconButton } from '@material-ui/core';


const Homepage = () => {
const {nickname, setUserID, setUserData, setNickname, socket, userID} = useContext(DataContext)

 const [phoneVersion, setPhoneVersion] = useState(false)


  useEffect(()=>{
    socket.emit("CheckUserID", userID);
    if(window.innerWidth < 520){
      setPhoneVersion(true)
    }


    window.addEventListener('resize', ()=>{
      if(window.innerWidth < 520){
        setPhoneVersion(true)
      }else{
        setPhoneVersion(false)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleLogOut = () => {
    setNickname(null);
    setUserID(null);
    Cookies.remove("userID");
    setUserData(null)
  };

  return (
    <>
  {phoneVersion ?  // PHONE VERSION
  <>
  <div className="header">
  {!nickname ? (
    <Link to="/login">
      <Button text={"Login"} />
    </Link>
  ) : (
    <>
    <Link to="/account">
           <IconButton>
          <AccountBoxIcon style={{color:'white'}}/>
    </IconButton>
    </Link>
    <Link to="/myparties">
    {/* <Button text={'My Parties'}/> */}
    <IconButton>
      <LibraryBooksIcon style={{color:'white'}}/>
    </IconButton>
    </Link>
    </>
  )}

  {!nickname ? (
    <Link to="/signup">
      <Button text={"Sign Up"} />

    </Link>
  ) : (
    <IconButton>
          <ExitToAppIcon style={{color:'white'}} onClick={handleLogOut}/>
    </IconButton>
  )}

</div> 
</>
: 
//          DESKTOP VERSION
  
  <div className="header">
  {!nickname ? (
    <Link to="/login">
      <Button text={"Login"} />
    </Link>
  ) : (
    <>
    <Link to="/account">
      <Button text={nickname} />
    </Link>
    <Link to="/myparties">
    <Button text={'My Parties'}/>
    </Link>
    </>
  )}

  {!nickname ? (
    <Link to="/signup">
      <Button text={"Sign Up"} />

    </Link>
  ) : (
    <Button text={"LogOut"} onClick={handleLogOut} />
  )}
</div>
  
  }


      <div className="content">
        <div className="homepage">
          <Title />
          <div className="streamingOffers">
            <StreamingOffer name="Netflix" color="#e50914" />
            <StreamingOffer name="Spotify" color="#1DB954" />
            <StreamingOffer name="HBOGO" color="white" />
            <StreamingOffer name="Disney+" color="#113CCF" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
