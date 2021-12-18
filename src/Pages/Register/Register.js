import React,{useState} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Shared/Navigation/Navigation';

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] =  useState('');
  const [password, setPassword] =  useState('');
  const [name, setName] =  useState('');
  const [error, setError] =  useState('');

  const { signInWithGoogle , createAccount} = useAuth();
  const handleGoogleSignIn = () => {
    signInWithGoogle(location,navigate)

  }

  const handleNameChange = e => {
    setName(e.target.value);
}

const handleEmailChange = e => {
    setEmail(e.target.value);
}
const handlePasswordChange = e => {
    setPassword(e.target.value);
}
const handleRegistration = e => {
    e.preventDefault();
    if (password.length < 6){
        setError('Password should be atleast 6 characters')

        return;
    }

    
  
    createAccount(email, password, name, navigate);
        // saveUser(email,name)
        // .then(result => {
        //     updateName(name)
        //     //history.push('/home');
        // })
        // .catch(error =>{
        //     setError(error.message)
        // })
    
        
}
    return (
        <>
        <Navigation></Navigation>
        <div  class="container h-100 mt-5">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div   class="col-lg-12 col-xl-11">
            <div  class="card text-black" style={{borderRadius: "30px",backgroundColor:'black'}}>
              <div style={{borderRadius: "30px",backgroundColor:'black'}} class="card-body p-md-5">
                <div class="row justify-content-center ">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
    
                    <p class="text-center text-white h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
    
                    <form onSubmit={handleRegistration} class="mx-1 mx-md-4">
    
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input onBlur={handleNameChange} type="text" id="form3Example1c" class="form-control" />
                          <label class="form-label" for="form3Example1c">Your Name</label>
                        </div>
                      </div>
    
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input onBlur={handleEmailChange} type="email" id="form3Example3c" class="form-control" />
                          <label class="form-label" for="form3Example3c">Your Email</label>
                        </div>
                      </div>
    
                      <div class="d-flex flex-row align-items-center mb-4">
                        <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div class="form-outline flex-fill mb-0">
                          <input onBlur={handlePasswordChange} type="password" id="form3Example4c" class="form-control" />
                          <label class="form-label" for="form3Example4c">Password</label>
                        </div>
                      </div>
    
                      <div className='d-flex '>
                    <p className='ms-3 me-2 text-white'>Already have an account?</p> <Link to='/login' className='text-danger'> Login</Link>
                    </div>
    
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" class="btn btn-danger ">Register</button>
                      </div>
    
                    </form>
                    <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>
    
             <div className='d-flex justify-content-center'>
             <button class="btn btn-danger" onClick={handleGoogleSignIn}>
                <i class="fab fa-facebook-f me-2"></i>Sign in with Google
              </button>
             </div>
                  </div>
                  <div class="col-md-10 col-lg-5 col-xl-6 d-flex align-items-center order-1 order-lg-2">
    
                    <img style={{height:'650px'}} src="https://i.ibb.co/5BWjgHf/photo-1495745966610-2a67f2297e5e-ixlib-rb-1-2.jpg" className="img-fluid" alt="Sample"/>
    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
};

export default Register;