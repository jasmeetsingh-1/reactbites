import React, { useState } from "react";
import "../cssFIles/profile/sidebar.css";

function Sidebar({ activeMenu, setActiveMenu }) {
  // const [activeMenu, setActiveMenu] = useState(1);
  return (
    <div className="profile-css-menu-div-holder">
      <div>
        <div
          className="profile-css-menu-heading"
          onClick={() => {
            setActiveMenu(1);
          }}
        >
          My Profile
        </div>
        <div
          className={`profile-css-menu-items ${
            activeMenu === 1 ? "profile-css-menu-active" : ""
          }`}
          style={{ marginTop: "4rem" }}
          onClick={(e) => {
            setActiveMenu(1);
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clip-path="url(#clip0_2_55)">
                <path
                  d="M26.3625 16.9125L28.0875 18.6375L11.1 35.625H9.375V33.9L26.3625 16.9125ZM33.1125 5.625C32.6437 5.625 32.1562 5.8125 31.8 6.16875L28.3687 9.6L35.4 16.6312L38.8312 13.2C39.5625 12.4688 39.5625 11.2875 38.8312 10.5563L34.4438 6.16875C34.0688 5.79375 33.6 5.625 33.1125 5.625ZM26.3625 11.6063L5.625 32.3438V39.375H12.6562L33.3937 18.6375L26.3625 11.6063Z"
                  fill={activeMenu === 1 ? "#1C1C1C" : "#858585"}
                />
              </g>
              <defs>
                <clipPath id="clip0_2_55">
                  <rect width="45" height="45" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Edit Profile
        </div>
        <div
          className={`profile-css-menu-items ${
            activeMenu === 2 ? "profile-css-menu-active" : ""
          }`}
          onClick={(e) => {
            setActiveMenu(2);
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clip-path="url(#clip0_2_58)">
                <path
                  d="M20 36.6667C21.8334 36.6667 23.3334 35.1667 23.3334 33.3333H16.6667C16.6667 35.1667 18.1667 36.6667 20 36.6667ZM30 26.6667V18.3333C30 13.2167 27.2834 8.93334 22.5 7.8V6.66667C22.5 5.28334 21.3834 4.16667 20 4.16667C18.6167 4.16667 17.5 5.28334 17.5 6.66667V7.8C12.7334 8.93334 10 13.2 10 18.3333V26.6667L6.66669 30V31.6667H33.3334V30L30 26.6667ZM26.6667 28.3333H13.3334V18.3333C13.3334 14.2 15.85 10.8333 20 10.8333C24.15 10.8333 26.6667 14.2 26.6667 18.3333V28.3333Z"
                  fill={activeMenu === 2 ? "#1C1C1C" : "#858585"}
                />
              </g>
              <defs>
                <clipPath id="clip0_2_58">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          Your Orders
        </div>
        {/* <div
          className={`profile-css-menu-items ${
            activeMenu === 3 ? "profile-css-menu-active" : ""
          }`}
          onClick={(e) => {
            setActiveMenu(3);
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <g clip-path="url(#clip0_2_69)">
                <path
                  d="M18.3333 30H21.6666V26.6667H18.3333V30ZM20 3.33334C10.8 3.33334 3.33331 10.8 3.33331 20C3.33331 29.2 10.8 36.6667 20 36.6667C29.2 36.6667 36.6666 29.2 36.6666 20C36.6666 10.8 29.2 3.33334 20 3.33334ZM20 33.3333C12.65 33.3333 6.66665 27.35 6.66665 20C6.66665 12.65 12.65 6.66667 20 6.66667C27.35 6.66667 33.3333 12.65 33.3333 20C33.3333 27.35 27.35 33.3333 20 33.3333ZM20 10C16.3166 10 13.3333 12.9833 13.3333 16.6667H16.6666C16.6666 14.8333 18.1666 13.3333 20 13.3333C21.8333 13.3333 23.3333 14.8333 23.3333 16.6667C23.3333 20 18.3333 19.5833 18.3333 25H21.6666C21.6666 21.25 26.6666 20.8333 26.6666 16.6667C26.6666 12.9833 23.6833 10 20 10Z"
                  fill={activeMenu === 3 ? "#1C1C1C" : "#858585"}
                />
              </g>
              <defs>
                <clipPath id="clip0_2_69">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          About Us
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
