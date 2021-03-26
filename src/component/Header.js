import React, { Component } from "react";
import Banner from "../Banner.jpg";
import Data from "../data/data.json";
class Header extends Component {
  render() {

    return (
      <div className="banner">
        <img src={require(`${Data.header.image.src}`).default} alt={Data.header.image.alt}/>
      </div>
    );
  }
}

export default Header;
