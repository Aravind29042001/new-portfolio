import React, { useEffect } from "react";
import "./Project.css";
import website from "../../assets/Shopeasey website.png";
import admin from "../../assets/Shopeasy Admin.png";
import portfolio from "../../assets/protfolio.png";
import Button from "../../component/button/Button";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Project = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div name="/project" className="project-container">
        <p className="project-title">PROJECTS</p>
        <div className="line-container">
          <div className="line"></div>
        </div>
        <div className="project-subtitle-container">
          <p className="project-subtitle">
            Here you will find information about projects serve as a testament
            to my skills, creativity, and problem-solving abilities.
          </p>
        </div>
        <div className="project-list">
          <div className="project-item">
            <img className="manfreer" src={website} alt="" data-aos="zoom-in" data-aos-duration="600"/>
            <div className="project-details" data-aos="zoom-in" data-aos-duration="1000">
              <div className="project-title-manfree">Shopeasey Ecommerce Website</div>
              <div className="project-description">
              Designed and refined the product card for the Shopeasey webpage to enhance its layout and visual appeal.
              </div>
              <Link to="/webste">
                <Button name="case study" value="casestudy-btn" />
              </Link>
            </div>
          </div>
          <div className="project-item">
            <img className="manfreer" src={admin} alt=""data-aos="zoom-in" data-aos-duration="600" />
            <div className="project-details" data-aos="zoom-in" data-aos-duration="1000">
              <div className="project-title-manfree">Shopeasey Admin Panel</div>
              <div className="project-description">
              Worked on the admin panel for the Shopeasey website, including components for managing categories, coupons, and vendors.
              </div>
              <Link to="/adminPanel">
                <Button name="case study" value="casestudy-btn" />
              </Link>
            </div>
          </div>
          <div className="project-item">
            <img className="manfreer" src={portfolio} alt="" data-aos="zoom-in" data-aos-duration="600"/>
            <div className="project-details" data-aos="zoom-in" data-aos-duration="1000">
              <div className="project-title-manfree">PORTFOLIO</div>
              <div className="project-description">
                I developed my portfolio in an impressive manner to showcase my
                skills and projects. It was a rewarding experience for me to
                create a platform that reflects my passion for design and
                development.it's a visual narrative of my dedication to design
                and development.
              </div>
              <Link to="/portfolio">
                <Button name="case study" value="casestudy-btn" />
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Project;
