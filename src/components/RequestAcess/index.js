import {React} from "react"
import {auth,GoogleProvider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";



const RequestAcess = () => {
    const navigate = useNavigate();
    
    const signInWithGoogle = async () => {
        try {
          await signInWithPopup(auth, GoogleProvider);
          navigate("/home")
          
        } catch (err) {
          console.error(err);
        }
      };

    return (
        <div className="main-container">
            <div className="">
                <div>
                    <img src="https://ik.imagekit.io/ipuggv51k/download_DcCw-iHKx.png?updatedAt=1697624879667" alt="" className="image"/>
                </div>
                <div>
                <h1 className="p">re<span className="head">Q</span></h1>
                <h1 className="heading">Real Estate Investing Information</h1>
                <h1 className="heading">That Matters to You</h1>
                <p className="paragraph">Limted to the San Francisco Bay Area -Join our BETA!</p>
                <div className="button-container">
                    <button className="button btn1" onClick={signInWithGoogle}>SIGN UP WITH LINKEDIN</button>
                </div>
                <p className="paragraph">SIGN IN</p>
                </div>
            </div>
        </div>
    )
}

export default RequestAcess;