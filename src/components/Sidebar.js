import { useState, useEffect, useRef } from "react";
import { LOGO, signOutImg } from "../utils/constants";
import { useSelector } from "react-redux";

const Sidebar = (props) => {
  const gptData = useSelector((state) => state.gpt.gptSearchView);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  const menuNavRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      console.log();
      if (
        !(
          menuRef?.current?.contains(e.target) ||
          menuNavRef?.current?.contains(e.target)
        )
      ) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);

    return document.removeEventListener("click", handleClickOutside);
  }, []);
  const toggleMenuBar = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center bg-black md:bg-inherit">
        <span
          ref={menuRef}
          onClick={toggleMenuBar}
          className="md:hidden font-materialIconFont text-5xl text-white hover:cursor-pointer"
        >
          menu
        </span>
        <img className="w-[150px] md:w-[300px] z-7000" src={LOGO} alt="logo" />
      </div>
      {showMenu && (
        <div
          className="bg-black h-screen w-[200px] relative bg-opacity-90"
          ref={menuNavRef}
        >
          <div className="flex">
            <img className=" w-[45px] h-10" alt="signout" src={signOutImg} />
            <span className="m-2 text-gray-500 font-bold"> {props.name}</span>
          </div>

          <button
            className="text-gray-500 font-extrabold m-2 block"
            onClick={() => {
              props.handleGptSearchView();
              setShowMenu(false);
            }}
          >
            {!gptData ? "GPT Search" : "Home"}
          </button>
          <button
            className="text-gray-500 font-extrabold ml-2"
            onClick={() => {
              props.handleSignOut();
              setShowMenu(false);
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
