import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Browse from "./Browse";
import Login from "./Login";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();
  /*
   In Firebase, onAuthStateChanged is a listener function that is called whenever the authentication  state 
   changes. This function is typically   used in Firebase Authentication to monitor whether a user is 
   signed in or signed out.
   */

  /*
    instaed of calling the dispatch function in login.js file at createuser and signin user fns,we are using
    the onAuthStateChanged and dispatching the actions.Ex.If user signsin.signsout onauth..fn is triggered 
    and if user details are there we are adding user details to store,else we call remove user fn
   */

  //setting up the event listener only once
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //if user is signed in
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        dispatch(addUser({ displayName, email, photoURL, uid }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};
export default Body;
