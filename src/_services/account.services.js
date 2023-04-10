import Axios from "./caller.services";

let login = (credentials) => {
    return Axios.post("/auth/login", credentials);
  };
  
  let saveToken = (token) => {
    localStorage.setItem("token", token);
  };
  
  let logout = () => {
    localStorage.removeItem("token");
  };
  
  let isLogged = () => {
    let token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  };
  
  let getToken = () => {
    return localStorage.getItem("token");
  };
  
  export const accountService = { saveToken, logout, login, isLogged  , getToken};