import React from "react";
import "./Profile.css"; // Import the CSS file

const Profile = () => {
  return (
    <div className="containerProfile bg-black ">
      <article className="card__article">
        <div className="card__profile">
          <img src="/Profile/profile.png" alt="Profile" className="card__profile-img" />
        </div>

        <div className="card__tooltip">
          <div className="card__content">
            <header className="card__header">
              <span>Social</span>

              <div className="card__social">
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/Footer/Youtube.webp" className="h-[5vh] w-[30vw]" alt="" />
                </a>

                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/Footer/Facebook.png" className="h-[5vh] w-[30vw]" alt="" />
                </a>

                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/Footer/Instagram.png" className="h-[5vh] w-[60vw]" />
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src="/Footer/X.png" className="h-[4vh] w-[30vw]" />
                </a>
              </div>
            </header>

            <div className="card__data">
              <div className="card__image">
                <div className="card__mask">
                  <img src="/Profile/profile.png" alt="Profile" className="card__img" />
                </div>
                <span className="card__status"></span>
              </div>

              <h2 className="card__name">Mr. Lokesh Bansal</h2>
              <h3 className="card__profession text-gray-400">Vastu Expert</h3>

              <a href="#" className="card__button">
                <i className="ri-chat-3-line"></i> <span>Send Message</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Profile;
