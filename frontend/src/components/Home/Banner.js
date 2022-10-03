import React, { useState } from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {
  let [open, setOpen] = useState(false);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">
            A place to <span onClick={() => {setOpen(!open)}} className="getter">get</span>
          </span>
          {open && (
            <input
              id="search-box"
              value={props.searchVal}
              onChange={props.stateSearch}
              placeholder="What is it that you truly desire?"
            ></input>
          )}
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
