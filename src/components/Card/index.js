import React from 'react';
import './style.css';

const Card = ({hero}) => {
    console.log(hero);
    const imgurl=`${hero.thumbnail.path}.${hero.thumbnail.extension}`;
    return (
        <div className="card">
          <div className="card-img">
          <img src={imgurl} alt="imagem" className="hero-img"/>
          </div>
          <div className="card-description">
          <h3>{hero.name}</h3>
          <p>{hero.description}</p>
          </div>

        </div>
    );
}

export default Card;