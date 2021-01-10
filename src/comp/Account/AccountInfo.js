import {DataContext} from '../../App';
import { useContext } from "react";
import {Link} from 'react-router-dom';

const AccountInfo = () => {
    const {userData} = useContext(DataContext)
    const {name, username, email, accountCreated, isVerified} = userData;

    return ( 
    <div className="accountInfo">
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
                <div style={{color:'#f94144'}}>Click here to verify your account. And check your email!</div>
              </Link>  
              } 

    </div>
     );
}
 
export default AccountInfo;