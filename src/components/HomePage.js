import React from 'react'
import "../styles/HomePageStyles.css"
import HomeImage from "../images/Bitmojis/Home.png";
export default function HomePage() {
  return (
    <div className='homePageContainer'>
      <div className='contentDiv'>
      <div className='content'>
        {/* <h1>Hi , It's me Danies Mohamed</h1> */}
        <p>A Creative web and mobile app developer who loves to do what he likes.More passionate in shaping the future of software development by designing smooth user interfaces that promote excellent user experience</p>

      </div>
      </div>
      <div className='rightImageDiv'>
        <div className='imageDIv'>
        {/* <img className="myImage" src={HomeImage} alt="My Image"/> */}
        </div>
      </div>
    </div>
  )
}
