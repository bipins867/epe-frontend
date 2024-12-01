import axios from "axios";
import { baseUrl } from "./config";

export const apiRequest = async (url, obj = {}, token = "", type = "get") => {
  const completeUrl = `${baseUrl}${url}`;
  console.log(completeUrl);
  console.log(baseUrl);
  const headers = {
    Authorization: token || "", // Fallback for optional token
    "Content-Type": "application/json", // Standard for API requests
  };

  let result;
  if (type === "get") {
    result = await axios.get(completeUrl, { headers });
  } else if (type === "post") {
    result = await axios.post(completeUrl, obj, { headers });
  } else {
    throw new Error("Unsupported request type. Use 'get' or 'post'.");
  }

  return result.data; // Return only the response data
};
