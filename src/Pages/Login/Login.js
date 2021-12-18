import React,{useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';
import './Login.css'
const Login = () => {
  const [email, setEmail] =  useState('');
    const [password, setPassword] =  useState('');
    const [error, setError] =  useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const { signInWithGoogle,loginWithEmailAndPassword } = useAuth();

  const handleGoogleSignIn = () => {
    signInWithGoogle(location,navigate)

   
}

const handleEmailChange = e => {
  setEmail(e.target.value);
}

const handlePasswordChange = e => {
    const password=e.target.value;
    if(password<6){
        setError("must be at least 6")
        return;
    }
    setPassword(password);
  }
 
const handleEmailAndPasswordSignIn = e => {
  e.preventDefault();
  loginWithEmailAndPassword(email,password, location, navigate)
  
  
}
    return (
       
           <>
        <div>
        <Navigation></Navigation>
        </div>
        
            <div style={{backgroundColor:'black'}} className="container py-5 h-100 border-5  my-5 px-5 area">
                
           

        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6 ">
            <img  style={{height:'650px'}} src="https://i.ibb.co/wr3Hkmp/photo-1556103255-4443dbae8e5a-ixlib-rb-1-2.jpg" className="img-fluid mb-5" alt="Phone"/>
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h1 className='text-white text-center mb-5 mt-4'>Sign In</h1>
            <form onSubmit={handleEmailAndPasswordSignIn}>
             
              <div className="form-outline mb-4">
                <input onBlur={handleEmailChange} type="email" id="form1Example13" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="form1Example13">Email address</label>
              </div>
    
             
              <div className="form-outline mb-4">
                <input onBlur={handlePasswordChange} type="password" id="form1Example23" className="form-control form-control-lg" />
                <label className="form-label" htmlFor="form1Example23">Password</label>
              </div>
                <div className='d-flex '>
                    <p className='me-2 text-white'>Dont have an account?</p> <Link to='/register' className='text-danger'> Register</Link>
                </div>
             
    
              <button  className="btn btn-danger d-flex mx-auto">Sign in</button>
    
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>
    
             <div className='d-flex justify-content-center'>
             <button className="btn btn-danger" onClick={handleGoogleSignIn}>
                {/* <i className="fab fa-facebook-f me-2"></i> */}
                Sign in with Google
              </button>
             </div>
             
    
            </form>
          </div>
        </div>
        
      </div>
      
      </>
    );
};

export default Login;