import React, { useState } from "react";
import logo from "../../imgs/logo.png";

const Banner = (props) => {

  let [val, setVal] = useState('');

  let changeHandler = (e) => {
    setVal(e.target.value);
    if (e.target.value.length >= 3) {
      props.search(e.target.value);
    } else {
      props.search('');
    }
    
  }

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <input id="search-box" value={val} onChange={changeHandler}></input>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
