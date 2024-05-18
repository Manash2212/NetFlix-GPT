import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import openai from "../utils/OpenAI";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchInputData = useRef(null);
  console.log(langKey);

  const handleGptSearch = async () => {
    console.log(searchInputData.current.value);
    // Write the Perfect query to search the Exact Movies name only.

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the Query : " +
      searchInputData.current.value +
      ". Only give me names of 8 movies maximum, comma separated like the example results given ahead. Example Result: Main hoon na, koi mill gaya, Sholay, Malang, Zindegi na Milegi Dobara, Don, Bahubali, RRR ";

    // Make an API Call to GPT API and get Movie Results.
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices)
      return alert(
        "There is a technical issue with the Gpt services. Please try after some time"
      );

    // we are getting strings from the output
    console.log(gptResult.choices);

    // Here i'm extracting all the strings and store it inside an array.
    const gptMovies = gptResult?.choices?.[0].message?.content?.split(",");
  };
  return (
    <div className="bg-formBg rounded-lg  w-1/2  absolute top-[20%] left-[25%]  ">
      <div className="">
        <form
          onClick={(e) => e.preventDefault()}
          className=" mx-4 my-2 flex gap-2 justify-center items-center"
        >
          <input
            ref={searchInputData}
            type="text"
            id=""
            placeholder={lang[langKey].gptSearchPlaceholder}
            className=" w-[80%] px-4 py-2 rounded-lg text-lg outline-none"
          />
          <button
            className="bg-netRed px-2 py-2 text-xl w-[20%] rounded-lg text-white font-medium"
            onClick={handleGptSearch}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
