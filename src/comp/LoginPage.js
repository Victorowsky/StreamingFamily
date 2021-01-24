import Login from './Login/Login';
import {Link} from 'react-router-dom'
import "./LoginPage.css"
const LoginPage = () => {
    return ( 
        <div className="firstComp">
            <div className="welcomeText">
               <h1 className="streamingFamily">Streaming Family</h1>
               <p>First website where you can find people to share your accounts!</p>
            </div>
            <div className="loginContainerFirst">
            <Login turnOffBack="true"/>
            <div className="createAccount">
                <h2>Don't have account?</h2>
                <Link to="/signup">
                <p>Register now for free!</p>
                </Link>
            </div>
            </div>
            
        </div>
     );
}
 
export default LoginPage;