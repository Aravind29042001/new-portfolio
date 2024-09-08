import React from "react";
import Button from "../../component/button/Button";
import banner from "../../assets/bg1.webp";
import "./adminpanel.css";
import admin from "../../assets/Shopeasy Admin.png";
import Footer from "../../component/footer/Footer";
import { Link } from "react-router-dom";
import Nav from "../../component/Navbar casestudy/NAV";

const AdminPanel = () => {
  return (
    <>
      <div
        className="netflix-single-container"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center center",
        }}
      >
        <Nav />
        <div className="netflix-single-content">
          <div className="netflix-single-title">SHOPEASEY ADMIN PANEL</div>
          <div className="netflix-single-item">
          This page contains the case study of Shopeasey Admin Panel which includes the Project Overview, Tools Used, and Live Links to the official product.
          </div>
          <Link to={"https://shopeasey-admin.vercel.app/"} target="_blank">
            <Button name="live link" value="project-btn" />
          </Link>
        </div>
      </div>
      <div className="project-single-item">
        <img className="netflix" src={admin} alt="" />
        <div className="project-single-details">
          <div className="project-title-single-netflix">PROJECT OVERVIEW</div>
          <div className="project-single-description">
            <p>
            The Shopeasey Admin Panel is a robust backend platform that demonstrates my skills in developing and managing complex web applications. I worked on the admin panel for the Shopeasey website, creating and refining components for managing categories, coupons, and vendors.
            </p>
            <p>
            This platform enables efficient administrative control, allowing the business to manage products and services effortlessly.
            </p>
            <p>
            My goal was to optimize the admin panel’s functionality while maintaining a user-friendly interface for seamless management.
            </p>
            <p>Feel free to check out the Project by visiting the Live Link.</p>
          </div>
          <div className="tool-title-single-netflix">TOOLS USED</div>
          <div className="skills">
            <div className="skills__skill">React</div>
            <div className="skills__skill">SCSS</div>
            <div className="skills__skill">JavaScript</div>
            <div className="skills__skill">Redux</div>
            <div className="skills__skill">GIT</div>
            <div className="skills__skill">Github</div>
          </div>
          <div className="tool-title-single-netflix">SEE LIVE</div>
          <div className="projects-btn">
            <Link to={"https://shopeasey-admin.vercel.app/"} target="_blank">
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

export default AdminPanel;
