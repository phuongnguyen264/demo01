import React, { Component } from "react";
import Item1 from "../item1.png";
import Item2 from "../item2.png";
import Data from "../data/data.json";

class MainContent extends Component {
  render() {
    const dataNews = Data.news;
    return (
      <div className="MainContent">
        {dataNews.map((item) => (
          <div className="MainContent_item">
            <img src={Item1} alt={item.image.alt} />
            <p> {item.description} </p>
          </div>
        ))}
      </div>
    );
  }
}

export default MainContent;
