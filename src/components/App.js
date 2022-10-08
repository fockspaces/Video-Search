import "./App.css";

import React, { useEffect, useState } from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSlectedVideo] = useState(null);
  const [videos, serach] = useVideos("happy");

  useEffect(() => {
    setSlectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={serach} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList videos={videos} onVideoSelect={setSlectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
