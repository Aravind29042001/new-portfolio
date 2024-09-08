import React from "react";
import Button from "../../component/button/Button";
import banner from "../../assets/bg1.webp";
import "./website.css";
import website from "../../assets/Shopeasey website.png";

// import manfree from "../../assets/manfree.webp";
import Footer from "../../component/footer/Footer";
import { Link } from "react-router-dom";
import Nav from "../../component/Navbar casestudy/NAV";

const Website = () => {
  return (
    <>
      <div
        className="maanfree-single-container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center center",
        }}
      >
        <Nav />

        <div className="manfree-single-content">
          <div className="manfree-single-title">SHOPEASEY ECOMMERCE WEBSITE</div>
          <div className="maanfrees-single-item">
            This page contains the case study of Shopeasey Ecommerce Website which includes the Project Overview, Tools Used, and Live Links to the official product.
          </div>
          <Link
            to={"https://shopeasey.com/ind/home-page"}
            target="_blank"
          >
            <Button name="live link" value="project-btn" />
          </Link>
        </div>
      </div>
      <div className="project-single-item">
        <img className="manfree" src={website} alt="" />
        <div className="project-single-details">
          <div className="project-title-single-manfree">PROJECT OVERVIEW</div>
          <div className="project-single-description">
            <p>
              Shopeasey is a comprehensive ecommerce platform that showcases my expertise in frontend web development. I was responsible for designing and refining the product card for the Shopeasey webpage, focusing on enhancing its layout and visual appeal.
            </p>
            <p>
            This platform effectively conveys the brand’s identity while ensuring a smooth and engaging shopping experience for users.
            </p>
            <p>
            My primary goal was to improve the visual presentation of products and create a seamless interface across all devices.
            </p>

            <p>Feel free to check out the Project by visiting the Live Link.</p>
          </div>
          <div className="tool-title-single-manfree">TOOLS USED</div>
          <div className="skills">
            <div className="skills__skill">React</div>
            <div className="skills__skill">SCSS</div>
            <div className="skills__skill">JavaScript</div>
            <div className="skills__skill">Redux</div>
            <div className="skills__skill">GIT</div>
            <div className="skills__skill">Github</div>
          </div>
          <div className="tool-title-single-manfree">SEE LIVE</div>
          <div className="projects-btn">
            <Link
              to={"https://shopeasey.com/ind/home-page"}
              target="_blank"
            >
              <Button name="LIVE LINK" value="live-btn" />
            </Link>
            <Link to={"/"}>
              <Button name="GO BACK" value="back-btn" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Website;
