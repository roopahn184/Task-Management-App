import React,{useState} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Task from '../components/Task';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate(); 
  const [openReg,setOpenReg]=useState(false)

  function handleLogin(e) {
      e.preventDefault()
      setOpenReg(true)
     
        navigate('/Task'); 

    };
  
    return <>
            <div className='main-container'>
             <div className="sub-container">
              <form>
              <h3 className='login-page'>Login to Continue</h3>
                  <label className='input-info'>
                    <input type="email" value={username} onChange={e => setUsername(e.target.value)} placeholder="Email Id" className='input-int' />
                  </label>
                  <label className='input-info'>
                      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Password" className='input-int'/>
                  </label>
                  {openReg ? (
                        <p>You are logged in.</p>
                     ) : (
             <div>
           <button onClick={handleLogin} className='button-btn'>Login</button>
            </div> 
                     )}
                     <a href="" className='taggle'>forget password</a>
              </form>
            
          </div>
      </div>
     
      
      </>
} export default Login