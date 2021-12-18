import {useState, useEffect} from "react";
import initializeAuthentication from "../Firebase/firebase.init"
import { GoogleAuthProvider,signInWithEmailAndPassword, getAuth, signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword,  updateProfile, signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] =  useState({})
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = (location, navigate) => {
        signInWithPopup(auth, provider)
        .then((result) => {
           
            const user = result.user;
            const redirect_uri = location?.from?.state || '/home';
            navigate(redirect_uri)
          
        }).catch((error) => {
           console.log(error)
        });
    }

    const loginWithEmailAndPassword = (email, password, location, navigate) => {
        // setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        
            .then((userCredential) => {
              
                const destination = location?.state?.from || '/';
                navigate(destination);
                // setAuthError('');
               
            })
            .catch((error) => {
                // setAuthError(error.message);
            })
            // .finally(() => setIsLoading(false));
    }

    const createAccount = (email, password, name, navigate) => {
        // setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                // saveUsers(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                .then(() => {
                })
                .catch((error) => {
                });
                navigate('/');
            })
            .catch((error) => {
                // setAuthError(error.message);
                
            })
            // .finally(() => setIsLoading(false));
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => 
            { 
                // setIsLoading(false) 
            }
            );
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUser(user);
            //   getIdToken(user)
            //   .then(idToken => {
            //       setToken(idToken)
            //   })
              // ...
            } else {
              // User is signed out
              setUser({});
            }
           
          });
          return () => unsubscribe;
    }, [auth])
    return{
        user,
        auth,
        signInWithGoogle,
        loginWithEmailAndPassword,
        createAccount,
        logOut
    }
}

export default useFirebase;