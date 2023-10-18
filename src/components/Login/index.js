import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { auth} from "../config/firebase";
import {createUserWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './index.css'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = async () => {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          navigate("/home")

        } catch (err) {
          console.error(err);
        }
      };

    return (
        <div className="main-container">
            <div className="app-container">
                <div>
                    <form  className="form">
                        <div>    
                            <AiOutlineSearch className='icon' />
                            <p className='paragraph'>Please confirm or edit your contact information. so that we can notify you when you are approved for our BETA</p>
                        </div>
                        <hr  className='line' />
                        <p className='paragraph1'>NAME</p>
                        <input type="text" name="" id="name" value={email} className="form-control input" placeholder="Name" onChange={e => setEmail(e.target.value)} required />
                        <p className='paragraph1'>EMAIL ADRESS</p>
                        <input type="email" name="" id="PWD" value={password} className="form-control input" placeholder="Email" onChange={e => setPassword(e.target.value)} required />

                        <p className='paragraph1'>PHONE NUMBER</p>
                        <input type="text" name="" className="form-control" placeholder="Type a phone number" required />
                        <hr className='line' />
                        <Link to="/home">
                        <div className="button-container">
                           
                            <button className="button btn" onClick={signIn}>SIGN UP</button>
                        </div>
                        </Link>
                    </form>
                </div>
            </div>
        </div>

    )

}

export default Login;