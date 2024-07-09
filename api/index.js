import axios from "axios";

const API_KEY = "32075498-f9ff6859fad7f76aa49d2813f";

const apiUrl = `https://pixabay.com/api/?key=${API_KEY}`;

//q,page,category,order
const formatUrl = (params) => {
  let url = apiUrl + "&per_page=25&safesearch=false&editors_choice=true";
  if (!params) return url;
  let paramKeys = Object.keys(params);
  paramKeys.map((key) => {
    let value = key == "q" ? encodeURIComponent(params[key]) : params[key];
    url += `&${key}=${value}`;
  });
  // console.log("final url: ", url);
  return url;
};

export const apiCall = async (params) => {
  try {
    const response = await axios.get(formatUrl(params));
    const { data } = response;
    return { success: true, data };
  } catch (err) {
    console.log("gor error: ", err.message);
    return { success: false, msg: err.message };
  }
};
