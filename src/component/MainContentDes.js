import React, {Component} from 'react';
import Data from '../data/data.json'

function MainContentDes () {
        const dataNews = Data.news
        return(
            <div >
                {dataNews.map((item) => (
                <p> {item.description} </p>
              ))}
            </div>
        );
}

export default MainContentDes;