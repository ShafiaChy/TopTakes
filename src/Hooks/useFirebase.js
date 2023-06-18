import { useState, useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        saveUsers(user.email, user.displayName, "PUT");
        const redirect_uri = location?.from?.state || "/home";
        navigate(redirect_uri);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const loginWithEmailAndPassword = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const createAccount = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUsers(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  const saveUsers = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://my-photography-server-shafiachy.vercel.app/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(
        "https://my-photography-server-shafiachy.vercel.app/users"
      );
      response = await response.json();
      setUser(response);
    }
  }, []);
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://my-photography-server-shafiachy.vercel.app/users/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin));
    }
  }, [user.email]);

  return {
    user,
    auth,
    authError,
    admin,
    isLoading,
    signInWithGoogle,
    loginWithEmailAndPassword,
    createAccount,
    logOut,
  };
};

export default useFirebase;
