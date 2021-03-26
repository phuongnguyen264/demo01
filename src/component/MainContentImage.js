import React, {Component} from 'react';
import Item1 from '../item1.png';
import Item2 from '../item2.png';
import Data from '../data/data.json'

function MainContentImage () {
        const dataNews = Data.news
        return(
            <div >
                {dataNews.map((item) => (
                <img src = {Item1} alt = {item.image.alt} />
              ))}
            </div>
        );
}

export default MainContentImage;