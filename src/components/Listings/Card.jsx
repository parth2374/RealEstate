import React from 'react';
import './styles.css';

const Card = ({ image, descriptionOne, descriptionTwo, title }) => {
    return (
        <article className="card__article shadow-md rounded-3xl shadow-[#ADD8E6]">
            <img src={image} alt="image" className="card__img" />
            <div className="card__data">
                <span className="card__description text-black">{descriptionOne}</span>
                <span className="card__description text-black font-bold">{descriptionTwo}</span>
                <h2 className="card__title">{title}</h2>
                <a href="/contact" className="card__button">Contact Us for more details</a>
            </div>
        </article>
    );
};

const CardContainer = ({imageUrl1, imageUrl2, imageUrl3, descriptionOne1, descriptionOne2, descriptionOne3, descriptionTwo1, descriptionTwo2, descriptionTwo3, title1, title2, title3 }) => {
    const cardsData = [
        {
            image: `${imageUrl1}`,
            descriptionOne: `${descriptionOne1}`,
            descriptionTwo: `${descriptionTwo1}`,
            title: `${title1}`,
        },
        {
            image: `${imageUrl2}`,
            descriptionOne: `${descriptionOne2}`,
            descriptionTwo: `${descriptionTwo2}`,
            title: `${title2}`,
        },
        {
            image: `${imageUrl3}`,
            descriptionOne: `${descriptionOne3}`,
            descriptionTwo: `${descriptionTwo3}`,
            title: `${title3}`,
        },
    ];

    return (
        <div className="containerHover">
            <div className="card__container">
                {cardsData.map((card, index) => (
                    <Card 
                        key={index} 
                        image={card.image} 
                        descriptionOne={card.descriptionOne} 
                        descriptionTwo={card.descriptionTwo} 
                        title={card.title} 
                    />
                ))}
            </div>
        </div>
    );
};

export default CardContainer;