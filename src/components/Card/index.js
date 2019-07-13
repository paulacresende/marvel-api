import React from 'react';
import './style.css';

const Card = ({hero}) => {
    console.log(hero);
    const imgurl=`${hero.thumbnail.path}.${hero.thumbnail.extension}`;
    return (
        <div className="main">
        <img src={imgurl} alt="imagem" className="hero-img"/>

          <p>{hero.name}</p>
          <p>
            {hero.description}
          </p>
        </div>
    );
}

export default Card;