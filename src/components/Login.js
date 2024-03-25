import { useState, useRef } from "react";
import Header from "./Header";
import checkFormValidation from "../utils/checkFormValidation";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_LOGO } from "../utils/constants";
const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMsg, setErrMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
  };
  const validateFormData = () => {
    const message = checkFormValidation(
      email.current.value,
      password.current.value
    );
    setErrMsg(message);
    if (message) return;
    setIsLoading(true);
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //we are adding display name by using updateprofile fn
          updateProfile(userCredential.user, {
            displayName: userName.current.value,
            //photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { displayName, email, uid, photoURL } = auth.currentUser;
              dispatch(addUser({ displayName, email, photoURL, uid }));
              setIsLoading(false);
            })
            .catch((error) => {
              // An error occurred
              setErrMsg(error);
              setIsLoading(false);
            });
          // is user signs/loginsin we will redirect to browse
          //navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          setIsLoading(false);
          // Signed in
          //navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " " + errorMessage);
          setIsLoading(false);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="w-screen">
        <img
          src={BG_LOGO}
          alt="movies"
          className="w-screen h-screen object-cover"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="py-7 px-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white w-full sm:6/12 md:w-3/12 bg-black bg-opacity-70"
      >
        <h1 className="text-3xl font-bold mb-7">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={userName}
            type="text"
            className="p-4 mb-6 w-full rounded-md bg-gray-700"
            name="name"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          type="email"
          name="email"
          placeholder="Email Address"
          className="p-4 mb-6 w-full rounded-md bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          name="password"
          placeholder="Password"
          className="p-4 mb-4 w-full rounded-md bg-gray-700"
        />
        <button
          className="bg-red-600 w-full rounded-md p-3 mb-4 text-white"
          onClick={validateFormData}
        >
          {isLoading ? (
            <i className="fa fa-circle-o-notch fa-spin text-3xl"></i>
          ) : isSignInForm ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </button>
        <p className="mb-3 font-medium text-red-600">{errMsg}</p>
        <p onClick={toggleSignInForm} className="cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a user?Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
