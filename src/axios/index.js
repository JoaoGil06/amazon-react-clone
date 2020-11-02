import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:5001/clone-169b5/us-central1/api",
  baseURL: "https://us-central1-clone-169b5.cloudfunctions.net/api",
});

export default instance;
