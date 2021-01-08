import "./Account.css"
import {Link} from 'react-router-dom';
import Button from '../SignUp/Button';

const Profile = ({nickname, userData}) => {

  console.log(userData);
  const {name, username, email, accountCreated, isVerified} = userData;


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
            <div className="leftPanel">
              <p className="leftPanelItem">Main</p>
              <p className="leftPanelItem">Change Password</p>
              <p className="leftPanelItem">Change Email</p>
              <p className="leftPanelItem">Settings</p>
            </div>
            <div className="rightPanel">
              <div>Name: {name}</div>
              <div>Username: {username}</div>
              <div>Password: ******</div>
              <div>Email: {email}</div>
              <div>Account created: {accountCreated}</div> 
              
                
              
              {isVerified ? 
              <div style={{color :'#90be6d'}}>Your account is verifed
              </div> 
              : 
              <Link to="/activate">
                <div style={{color:'#f94144'}}>Your account is not verifed! Check your email!</div>
              </Link>  
              }
            </div>
          </div>
      </div>
      </>
     );
}
 
export default Profile;
