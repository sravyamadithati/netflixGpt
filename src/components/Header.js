import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { resetGptResults, toggleGptSearchView } from "../utils/gptSlice";
import { signOutImg } from "../utils/constants";
import Sidebar from "./Sidebar";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const gptData = useSelector((state) => state.gpt.gptSearchView);

  //setting up the event listener only once

  useEffect(() => {
    /*
      When you first attach a listener using onAuthStateChanged, Firebase immediately invokes your callback function 
      with the initial authentication state of the user, if they are already signed in/not signed in .Whenever 
      the authentication state of the user changes, Firebase automatically calls your onAuthStateChanged callback function again.

      In Firebase, onAuthStateChanged is a listener function that is called whenever the authentication  state 
      changes. This function is typically   used in Firebase Authentication to monitor whether a user is 
      signed in or signed out.
   */

    /*
      instaed of calling the dispatch function in login.js file at createuser and signin user fns,we are using
      the onAuthStateChanged and dispatching the actions.Ex.If user signsin.signsout onauth..fn is triggered 
      and if user details are there we are adding user details to store,else we call remove user fn
   */

    /*
      using this if user access browse page,if he is signed in he can access browse page ,
      If not signed in will be redirected to login page
    */
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      //if user is signed in
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        dispatch(addUser({ displayName, email, photoURL, uid }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribing to onauthstate change method when component is unmounted
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //updating store after user signout
        dispatch(removeUser());
        dispatch(resetGptResults());
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptSearchView = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="max-w-full w-screen absolute z-3000 md:bg-gradient-to-b md:from-black flex flex-col md:flex-row md:justify-between">
      <Sidebar
        name={user?.displayName}
        handleGptSearchView={handleGptSearchView}
        handleSignOut={handleSignOut}
      />
      {user && (
        <div className="justify-center hidden md:flex ">
          <button
            className="bg-gray-700 text-white h-14 my-1 md:my-6 px-3  rounded-lg"
            onClick={handleGptSearchView}
          >
            {!gptData ? "GPT Search" : "Home"}
          </button>
          <img
            className=" w-[55px] h-12 mt-2 md:mt-6 pl-3"
            alt="signout"
            src={signOutImg}
          />
          <button className="text-white font-bold mr-7" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
