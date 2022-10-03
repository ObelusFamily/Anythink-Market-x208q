import React from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {

  /*
  let changeHandler = (e) => {
    setVal(e.target.value);
    props.stateSearch(e);
    if (e.target.value.length >= 3) {
      props.search(e.target.value);
    } else {
      props.search("");
    }
  };
*/
  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input id="search-box" value={props.searchVal} onChange={props.stateSearch} placeholder="What is it that you truly desire?"></input>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
