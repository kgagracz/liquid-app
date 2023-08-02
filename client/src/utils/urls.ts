const LOCAL_API_ADDRESS = "http://localhost:1337/api";
const PUBLIC_API_ADDRESS = "https://liquid-app-cms.herokuapp.com/api";

export let API_ADDRESS = "";
process.env.NODE_ENV === "development"
  ? (API_ADDRESS = LOCAL_API_ADDRESS)
  : (API_ADDRESS = PUBLIC_API_ADDRESS);
