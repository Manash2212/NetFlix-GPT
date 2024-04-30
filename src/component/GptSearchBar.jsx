import React from "react";

const GptSearchBar = () => {
  return (
    <div className="bg-formBg rounded-lg  w-1/2  absolute top-[20%] left-[25%]  ">
      <div className="">
        <form
          action=""
          className=" mx-4 my-2 flex gap-2 justify-center items-center"
        >
          <input
            type="text"
            id=""
            placeholder="What would you like to watch today?"
            className=" w-[80%] px-4 py-2 rounded-lg text-lg outline-none"
          />
          <button className="bg-netRed px-4 py-2 text-xl w-[20%] rounded-lg text-white font-semibold">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
