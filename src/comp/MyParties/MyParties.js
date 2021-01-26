import "./MyParties.css"
import { Link } from "react-router-dom";
import Button from "../SignUp/Button"
import {DataContext} from "../../App"
import { useContext, useEffect, useState } from "react";
import Party from "../Party"
import MyPartiesSchema from './MyPartiesSchema';
import Loading from '../Loadings/Loading';


const MyParties = () => {

    const {userData,socket} = useContext(DataContext)
    const [myPartiesData, setMyPartiesData] = useState([])


    useEffect(()=>{
        socket.emit('getMyParties', userData.myParties)

          return ()=>{
            setMyPartiesData([])
          }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    socket.on('getMyPartiesAnswer', (partiesAnswer)=>{
    setMyPartiesData(partiesAnswer)
    })
    
    // sorting Parties
    let netflixParties = [], spotifyParties=[], hbogoParties=[], disneyParties=[];

    myPartiesData.forEach((party)=>{
      switch (party.streamingPlatform) {
        case 'Netflix':
          netflixParties.push(party) 
          break;

        case 'Spotify':
          spotifyParties.push(party) 
          break;

        case 'HBOGO':
          hbogoParties.push(party) 
          break;

        case 'Disney+':
          disneyParties.push(party) 
          break; 
      
        default:
          console.log('streaming Party Error');
          break;
      }
    })

     netflixParties = netflixParties.map((party) => {
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
         <Link to={`/party/${party._id}`}>
          <Party
          join={false}
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
         </Link>

      )});

      spotifyParties = spotifyParties.map((party) => {
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
        <Link to={`/party/${party._id}`}>
          <Party
          join={false}
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
        </Link>
      )});

      hbogoParties = hbogoParties.map((party) => {
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
        <Link to={`/party/${party._id}`}>
        <Party
        join={false}
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
      </Link>
      )});

      disneyParties = disneyParties.map((party) => {
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
            case 'Disney+':
                color= '#113CCF'
                break;
            default:
                color="white"
                break;
        }
       return (
        <Link to={`/party/${party._id}`}>
          <Party
          join={false}
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
        </Link>
      )});

      return ( 
        <>
        <div className="header">
          <Link to="/">
            <Button variant="outlined" text={"Back"} />
          </Link>
        </div>
       {myPartiesData ? 
       <div className="myPartiesContent">
       <h1>My Parties</h1>

           <div className="myParties">
           <MyPartiesSchema  parties={netflixParties} streamingPlatform={'Netflix'}/>
           <MyPartiesSchema  parties={spotifyParties} streamingPlatform={'Spotify'}/>
           <MyPartiesSchema  parties={hbogoParties} streamingPlatform={'HBO GO'}/>
           <MyPartiesSchema  parties={disneyParties} streamingPlatform={'Disney+'}/>
           </div>
       </div>
       :
       <div className="myPartiesLoading">
                 <Loading/>
       </div>
       } 
        </>
     );
}
 
export default MyParties;