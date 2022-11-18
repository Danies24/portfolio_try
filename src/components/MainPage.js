import React, { useEffect, useState } from "react";
import AboutPage from "./AboutPage";
import HomePage from "./HomePage";
import PortfolioPage from "./PortfolioPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";
import SkillsImage from "../images/Bitmojis/Skills.png";
import ContactImage from "../images/Bitmojis/Contact.png";
import PortfolioImage from "../images/Bitmojis/Projects.png";
import HomeImage from "../images/Bitmojis/Home.png";
import AboutImage from "../images/Bitmojis/AboutMe.png";
import WelcomePage from "./WelcomePage";
export default function MainPage() {
  const [mainContent, setMainContent] = useState("WELCOMEPAGE");
  const [hover, setHover] = useState(null);
  const [visibleBottom, setVisibleBottom] = useState(false)
  const [timer, setTimer] = useState(null)

    const handleMouseLeave = event => {
      setTimer(setTimeout(() => {
          setVisibleBottom(false)
        }, 2000))
    }
    const handleMouseEnterBottom=()=>{
      clearTimeout(timer)
      setVisibleBottom(true)
    }
    const mouseEnterImageMain=()=>{
      setHover(true)
      handleMouseEnterBottom();
    }

  return (
    <div className="mainPageContainer" style={{backgroundColor:"black",color:"white"}}>
      <div className="top">
        <p>DMAN</p>
        <div>CONNECT</div>
      </div>
      <div className="middle">
        {mainContent == "WELCOMEPAGE" ? (
          <WelcomePage visibleBottom={visibleBottom} />
        ) : mainContent == "HOMEPAGE" ? (
          <HomePage />
        ) : mainContent == "ABOUTPAGE" ? (
          <AboutPage />
        ) : mainContent == "SKILLSPAGE" ? (
          <SkillsPage />
        ) : mainContent == "PORTFOLIOPAGE" ? (
          <PortfolioPage />
        ) : (
          mainContent == "CONTACTPAGE" && <ContactPage />
        )}
      </div>
      <div className="bottom"  onMouseEnter={handleMouseEnterBottom} onMouseLeave={handleMouseLeave}>
        <div
          className="imageMain"
          style={{opacity : visibleBottom ? "1" : "0"}}
          onMouseEnter={mouseEnterImageMain}
          onMouseLeave={()=>setHover(false)}
        >
          <div
            className="imageContainer"
            onClick={() => setMainContent("HOMEPAGE")}
          >
            <img
              className="image"
              style={{
                marginTop: hover  ? "-25px" : null,
              }}
              src={HomeImage}
              alt="Home"
            />
            {hover  ? (
              <span className="imageName">HOME</span>
            ) : null}
          </div>
          <div
            className="imageContainer"
            onClick={() => setMainContent("ABOUTPAGE")}
          >
            <img
              className="image"
              src={AboutImage}
              alt="About"
              style={{
                marginTop: hover  ? "-25px" : null,
              }}
            />
            {hover  ? (
              <span className="imageName">ABOUT</span>
            ) : null}
          </div>

          <div
            className="imageContainer"
            onClick={() => setMainContent("SKILLSPAGE")}
          >
            <img
              className="image"
              src={SkillsImage}
              alt="Skills"
              style={{
                marginTop:
                  hover  ? "-25px" : null,
              }}
            />
            {hover  ? (
              <span className="imageName">SKILLS</span>
            ) : null}
          </div>
          <div
            className="imageContainer"
            onClick={() => setMainContent("PORTFOLIOPAGE")}
          >
            <img
              className="image"
              src={PortfolioImage}
              alt="Portfolio"
              style={{
                marginTop:
                  hover  ? "-25px" : null,
              }}
            />
            {hover  ? (
              <span className="imageName">PROJECTS</span>
            ) : null}
          </div>
          <div
            className="imageContainer"
            onClick={() => setMainContent("CONTACTPAGE")}
          >
            <img
              className="image"
              src={ContactImage}
              alt="Contact"
              style={{
                marginTop:
                  hover  ? "-25px" : null,
              }}
            />
            {hover  ? (
              <span className="imageName">CONTACT</span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
