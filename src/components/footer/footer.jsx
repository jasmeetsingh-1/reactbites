import React from "react";
import "../cssFIles/footer/footer.css";
import footerImage from "../../assets/footer-image-svg.svg";
import github from "../../assets/github-svg.svg";
import linkedIn from "../../assets/linkedIn-svg.svg";
import gmail from "../../assets/gmail-svg.svg";
import whatsapp from "../../assets/whatsapp-svg.svg";
import TempFileComponent from "../temp/tempFiles";

function Footer() {
  return (
    <div className="footer-outer-div">
      <div className="footer-content-holder">
        <p>
          <span>Programming Languages:</span> Java{" "}
        </p>
        <p>
          <span>Web & Development:</span> ReactJs • HTML • CSS • JavaScript •
          Bootstrap
        </p>
        <p>
          <span>UI Designs:</span> Figma
        </p>
      </div>
      <div className="footer-right-details-holder">
        <TempFileComponent className="tempFile-component-footer" />
        <h4>Jasmeet Singh</h4>
        <span>Front-end Developer</span>
        <div className="social-icon-holder">
          <img src={github} />
          <img src={linkedIn} />
          <img src={gmail} />
          <img src={whatsapp} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
