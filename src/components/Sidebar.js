import { signOutImg } from "../utils/constants";

const Sidebar = (props) => {
  return (
    <div>
      <span className="font-materialIconFont text-5xl text-white">menu</span>
      <div className="bg-black h-screen w-[200px]">
        <div className="flex">
          <img className=" w-[45px] h-10" alt="signout" src={signOutImg} />
          <span className="m-2 text-gray-500 font-extrabold">
            {" "}
            {props.name}
          </span>
        </div>

        <button
          className="text-gray-500 font-extrabold m-2 block"
          //onClick={handleGptSearchView}
        >
          GPT Search
        </button>
        <button className="text-gray-500 font-extrabold ml-2">Sign Out</button>
      </div>
    </div>
  );
};

export default Sidebar;
