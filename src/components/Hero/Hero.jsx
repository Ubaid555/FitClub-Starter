import React from 'react';
import Header from '../Header/Header';
import './Hero.css';
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
const hero = () => {
  return (
    <div className="hero">
        <div className="left-h">
          <Header/>
          {/*The best add heading start*/}
          <div className="the-best-ad">
            
              <span>The best fitness club in the town</span>
          
          </div>
          {/*The best add heading close*/}

          {/*Opening the Hero text div*/ }
          <div className="hero-text">
            <div >
                <span className='stroke-text'>Shape</span>
                <span>Your</span>
            </div>
            <div>
                <span>Ideal body</span>
            </div>
            <div>
              <span>IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST</span>
            </div>
          </div>
            {/*Closing the Hero text div*/ }

            {/*Figures Opening*/}
            <div className ="figures">
              <div>
                <span>+140</span>
                <span>Exert Coaches</span>
              </div>
              <div>
                <span>+978</span>
                <span>members joined</span>
              </div>
              <div>
                <span>+50</span>
                <span>Fitness Programs</span>
              </div>
            </div>
            {/*Figures Closing*/}

            {/*Buttons Start*/}

            <div className="Hero-Button">
              <buttons className="btn"> Get Started</buttons>
              <button className="btn">Learn More</button>

            </div>

        </div>
        <div className="right-h">
          <button className="btn">
            Join now
          </button>
          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate </span>
            <span> 116 bpm</span>
          </div>
          {/* hero image */}
          <img src={hero_image} alt="" className="hero-image" />
          <img src={hero_image_back} alt="" className="hero-image-back" />
          {/* calories */ }
          <div className="calories">
            <img src={Calories} alt="" />
            <div>
            <span>Calories Burned</span>
            
            <span>220 kcal</span>
            </div>  
          </div>
        </div>
    </div>
  )
}

export default hero