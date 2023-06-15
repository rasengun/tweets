import axios from "axios";

const tweetsInstance = axios.create({
  baseURL: "https://6403694af61d96ac487f1c15.mockapi.io/api/tweets",
});

export const fetchTweets = async (setTweets) => {
  try {
    const response = await tweetsInstance.get("/");

    const savedTweets = JSON.parse(localStorage.getItem("tweets"));

    if (savedTweets) {
      setTweets(savedTweets);
    } else {
      setTweets(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};
