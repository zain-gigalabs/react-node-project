import axios from "axios";

const URL = "http://localhost:8000/api";

const createUser = async (post) => {
  console.log(post);
  try {
    return await axios.post(`${URL}/add_user`, post);
  } catch (e) {
    console.log("Error calling api", e);
  }
};

export default createUser;
