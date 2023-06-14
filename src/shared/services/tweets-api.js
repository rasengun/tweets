import axios from "axios";

const tweetsInstance = axios.create({
  baseURL: "https://6403694af61d96ac487f1c15.mockapi.io/api/tweets",
});

export const getAllUsers = async () => {
  const { data } = await tweetsInstance.get("/");
  return data;
};

export const deleteContact = async (id) => {
  const { data } = await tweetsInstance.delete(`/${id}`);
  return data;
};
