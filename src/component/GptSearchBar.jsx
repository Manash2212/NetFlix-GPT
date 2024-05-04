import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  console.log(langKey);
  return (
    <div className="bg-formBg rounded-lg  w-1/2  absolute top-[20%] left-[25%]  ">
      <div className="">
        <form
          onClick={(e) => e.preventDefault()}
          className=" mx-4 my-2 flex gap-2 justify-center items-center"
        >
          <input
            type="text"
            id=""
            placeholder={lang[langKey].gptSearchPlaceholder}
            className=" w-[80%] px-4 py-2 rounded-lg text-lg outline-none"
          />
          <button className="bg-netRed px-2 py-2 text-xl w-[20%] rounded-lg text-white font-medium">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
