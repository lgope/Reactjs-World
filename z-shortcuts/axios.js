import axios from "axios";

// api base url
const baseURL = "api base url";

// auth token
const authToken = localStorage.getItem("token");

export default axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `${authToken ? "Token " + authToken : ""}`
  }
  // You can add your headers here
});
