import React, { useState } from "react";
import "./userProfile.css";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleInfo = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="main__userprofile">
      <div className="profile__card user__profile__image">
        <div className="profile__image">
          <img src="logo192.png" alt="User Profile" />
        </div>
        <h4>Fernando Faucho</h4>
        <p>CEO & Founder at Highly Inc</p>
      </div>
      <div className="profile__card">
        <div className="card__header" onClick={toggleInfo}>
          <h4>Information</h4>
          <i className={`fa ${isOpen ? "fa-angle-up" : "fa-angle-down"}`}></i>
        </div>
        {isOpen && (
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
