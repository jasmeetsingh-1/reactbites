import React from "react";
import Header from "../header/header";
import "../cssFIles/homepage/homepage.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="main-home-page-container">
        <div>Menu Div</div>
        <div>Content holder</div>
      </div>
    </>
  );
}
