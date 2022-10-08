import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return;
    <div class="ui active dimmer">
      <div class="ui text loader">Loading</div>
    </div>;
  }

  const embLink = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={embLink} />
      </div>
      <div className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
