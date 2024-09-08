import React from "react";
import "./Footer.css";
import linked from "../../assets/linkedin.webp";
import twitter from "../../assets/twitters.webp";
import instagram from "../../assets/instagram.webp";
import github from "../../assets/github.webp";
import gmail from "../../assets/gmail.webp";
const Footer = () => {
  return (
    <div name="/footer" className="Footer-container">
      <div className="Footer-items">
        <div className="Footer-social">
          <div className="Footer-social-title">SOCAIL</div>
          <a
            href="mailto:aravind29042001@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <img src={gmail} alt="Gmail" />
          </a>
          <a
            href="https://www.linkedin.com/in/aravind-m-4858a5246"
            rel="noreferrer"
            target="_blank"
          >
            <img src={linked} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/Aravind29042001"
            rel="noreferrer"
            target="_blank"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://www.instagram.com/aravind_rocker14"
            rel="noreferrer"
            target="_blank"
          >
            <img src={instagram} alt="Instagram" />
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            rel="noreferrer"
            target="_blank"
          >
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
        <div className="Footer-about">
          <div className="Footer-about-title">ARAVIND</div>
          <div className="Footer-about-details">
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </div>
        </div>
      </div>
      <div className="footer-lower">
        © Copyright2023 Made by {""}
        <a rel="noreferrer" target="_blank" href="/">
          Aravind
        </a>
      </div>
    </div>
  );
};

export default Footer;
