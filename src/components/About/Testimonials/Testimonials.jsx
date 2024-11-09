import React from 'react';
import './Testimonials.css'; // Import your CSS styles

const Testimonials = () => {
  return (
    <div className="containerTest">
      <div className="card_container">
        <article className="card_article">
          <img src="/Testimonial/insect-1.png" alt="Elegant Queen Bee" className="card_img" />
          <div className="card_data">
            <h3 className="card_title">Elegant <br /> Queen Bee</h3>
            <span className="card_price">$5999</span>
          </div>
          <img src="/Testimonial/bg-card.png" alt="background" className="card_bg" />
          <a href="#" className="card_button">
            View More <i className="ri-arrow-right-line"></i>
          </a>
        </article>

        <article className="card_article">
          <img src="/Testimonial/insect-2.png" alt="Mechanical Magic Butterfly" className="card_img" />
          <div className="card_data">
            <h3 className="card_title">Mechanical Magic <br /> Butterfly</h3>
            <span className="card_price">$3999</span>
          </div>
          <img src="/Testimonial/bg-card.png" alt="background" className="card_bg" />
          <a href="#" className="card_button">
            View More <i className="ri-arrow-right-line"></i>
          </a>
        </article>

        <article className="card_article">
          <img src="/Testimonial/insect-3.png" alt="Wonderful Flower Beetle" className="card_img" />
          <div className="card_data">
            <h3 className="card_title">Wonderful <br /> Flower Beetle</h3>
            <span className="card_price">$8999</span>
          </div>
          <img src="/Testimonial/bg-card.png" alt="background" className="card_bg" />
          <a href="#" className="card_button">
            View More <i className="ri-arrow-right-line"></i>
          </a>
        </article>
      </div>
    </div>
  );
};

export default Testimonials;
