import axios from "axios";

let url = "http://localhost:5050/api";

if (process.env.NODE_ENV === "production") {
  url = "/api";
  //i'm already on my root in heroku so i don't need all the address
}
export const userAPI = axios.create({
  baseURL: url,
});
