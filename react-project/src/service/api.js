import axios from "axios";

const URL = "http://localhost:8000/api";

export const createUser = async (post) => {
  try {
    return await axios.post(`${URL}/add_user`, post);
  } catch (e) {
    console.log("Error calling api", e);
  }
};
export const login = async (email, password) => {
  let response = await axios.post(`${URL}/login`, { email, password });
  if (!(Object.keys(response.data).length === 0)) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response;
  try {
  } catch (e) {
    console.log("Error calling api", e);
  }
};
