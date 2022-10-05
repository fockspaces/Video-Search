import React from "react";

import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";

class App extends React.Component {
  onTermSubmit = async (term) => {
    // youtube(term);
    console.log(term);
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(res);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
