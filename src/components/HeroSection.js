import React from "react";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>i-Access Solutions Inc</h1>
      <p>Here to solve all your recruitment challenges</p>
    </div>
  );
}

export default HeroSection;
