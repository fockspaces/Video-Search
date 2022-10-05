import axios from "axios";

const KEY = "AIzaSyDq5sC9TYx8NichpqZjo2y2oxWEKiB3T8A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
