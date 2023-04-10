import Axios from "./caller.services";

let getAllUsers = () => {
  return Axios.get("/users");
};

let getUserById = (id) => {
  return Axios.get(`/users/${id}`);
};

export const userService = { getAllUsers, getUserById };
