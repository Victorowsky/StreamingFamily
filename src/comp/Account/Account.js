import "./Account.css"
import {Link} from 'react-router-dom';
import Button from '../SignUp/Button';
import {DataContext} from '../../App';
import { useContext, useState } from "react";
import AccountInfo from './AccountInfo';
import ChangePassword from './ChangePassword';
import ChangeEmail from './ChangeEmail';

const Profile = () => {
  const {userData} = useContext(DataContext)
  const {name} = userData;
  const [whichContent, setWhichContent] = useState('Account')

  const handleSetRightPanel = (e)=> {
    // console.log(e.target);
    if(e.target.className === "leftPanelItem"){
      setWhichContent(e.target.textContent)
    }
  }

    return ( 
        <>
        <div className="header">
        <Link to="/">
          <Button variant="outlined" text={"Back"} />
        </Link>
      </div>
      <div className="accountContent">
       <h1>Hello, {name}</h1>  
          <div className="account">
            <div onClick={(e)=>{handleSetRightPanel(e)}} className="leftPanel">
              <p className="leftPanelItem">Account</p>
              <p className="leftPanelItem">Change Password</p>
              <p className="leftPanelItem">Change Email</p>
            </div>
            <div className="rightPanel">
            {whichContent === "Account" &&  <AccountInfo/>} 
            {whichContent === "Change Password" &&  <ChangePassword/>} 
            {whichContent === "Change Email" &&  <ChangeEmail/>} 

            </div>
          </div>
      </div>
      </>
     );
}
 
export default Profile;
