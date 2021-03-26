import React, {Component} from 'react';
import FacebookImg from '../facebook.jpg'
import InstagramImg from '../instagram.jpg'
import Data from '../data/data.json'

function Footer () {
        const dataFooter = Data.footer.images
        return (
            <div className = 'Footer'>
                <div className = 'Footer_infor'>
                    <p>{Data.footer.description}</p>
                </div>
                <div class="Footer_socials">
                    {dataFooter.map((socials) => (
                    <div>
                    <p>
                        <a href={socials.href} > 
                        <img src={socials.src} alt={socials.alt} width="24" height="24"/>
                        </a>
                    </p>
                    </div>
                     ))}                   
                </div>
            </div>

        );
}

export default Footer;