import React from 'react';
import { useState } from 'react';

const EachRapper = ({ id, image, info, name, removeRappers }) => {
  const [readMore, setReadMore] = useState(true);
  return (
    <>
      <article className='single-rapper'>
        <img src={image} alt={name} />
        <footer>
          <div className='rapper-info'>
            <h4>{name}</h4>
            <h4 className='rapper-age'>{id}</h4>
          </div>
          <p>{readMore ? info : `${info.substring(0, 200)}...`}</p>
          <button onClick={() => setReadMore(!readMore)}>{readMore ? 'show less' : 'read more'}</button>
          <button className='delete-btn' onClick={() => removeRappers(id)}>
            not interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default EachRapper;
