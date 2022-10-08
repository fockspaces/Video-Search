import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    // callback from parent component
    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="ui grid">
          <div className="ui row">
            <div className="one wide column">
              <i className="red users big code icon caret square right icon"></i>
            </div>
            <div className="field ten wide column">
              <input
                placeholder="search video..."
                type="text"
                value={term}
                onChange={(e) => {
                  setTerm(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
