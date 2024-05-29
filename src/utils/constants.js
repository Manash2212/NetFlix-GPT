export const NetflixLogo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const Netflix_Background_IMG =
  " https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { indentifier: "en", name: "English" },
  { indentifier: "hindi", name: "Hindi" },
  { indentifier: "spanish", name: "Spanish" },
  { indentifier: "bengali", name: "Bengali" },
];

// export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
export const OPENAI_KEY =
  "sk-proj-1TChVkq2NxgoYRCZkVliT3BlbkFJ43fO7wdVklh5Y3fobsjs";
