import "./MyParties.css"
import { Link } from "react-router-dom";
import Button from "./SignUp/Button"
import {DataContext} from "../App"
import { useContext, useEffect, useState } from "react";
import Party from "./Party"


const MyParties = () => {

    const {userData,socket} = useContext(DataContext)
    const [myPartiesData, setMyPartiesData] = useState([])


    useEffect(()=>{
        socket.emit('getMyParties', userData.myParties)

          return ()=>{
            setMyPartiesData([])
          }
    },[])

    socket.on('getMyPartiesAnswer', (partiesAnswer)=>{
    setMyPartiesData(partiesAnswer)
    })
    
    const netflixParties = myPartiesData.filter((party)=>party.streamingPlatform ==="Netflix")

    const spotifyParties = myPartiesData.filter((party)=>party.streamingPlatform ==="Spotify")




    const netflixParitesList = netflixParties.map((party) => {
        let color
        // CHOOSE RIGTH COLOR FOR ALL PLATFORMS
       switch (party.streamingPlatform) {
            case 'Netflix':
                color = "#e50914"
                break;
            case 'Spotify':
                color = '#1DB954'
                break;

            case 'HBO GO':
                color= 'white'
                break ;
            case 'Disney +':
                color= '#113CCF'
                break;
            default:
                color="white"
                break;
        }
       return (
        <Party
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
      )});

      const spotifyParitesList = spotifyParties.map((party) => {
        let color
        // CHOOSE RIGTH COLOR FOR ALL PLATFORMS
       switch (party.streamingPlatform) {
            case 'Netflix':
                color = "#e50914"
                break;
            case 'Spotify':
                color = '#1DB954'
                break;

            case 'HBO GO':
                color= 'white'
                break ;
            case 'Disney +':
                color= '#113CCF'
                break;
            default:
                color="white"
                break;
        }
       return (
        <Party
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
      )});

    return ( 
        <>
        <div className="header">
          <Link to="/">
            <Button variant="outlined" text={"Back"} />
          </Link>
        </div>
        <div className="myPartiesContent">
            <div className="myParties">
              {/* {myPartiesList ? myPartiesList : `Join to party first`}   */}
               
            {netflixParitesList &&   
            <>
            <h2>Netflix :</h2>

              <div className="MyPartiesRow">
              {netflixParitesList}
              </div>
              </>
              }
              
           {spotifyParitesList && <> <h2>Spotify:</h2>
          <div className="MyPartiesRow">
              {spotifyParitesList}
        </div></>}
            

            </div>
        </div>
        </>
     );
}
 
export default MyParties;