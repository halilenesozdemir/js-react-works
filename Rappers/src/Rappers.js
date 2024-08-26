import React from 'react';
import EachRapper from './EachRapper';

const Rappers = ({ rappers, removeRappers }) => {
  return (
    <>
      <section>
        <div className='title'>
          <h2>My Favourite Rappers</h2>
        </div>
        <div>
          {rappers.map(rapper => {
            return <EachRapper key={rapper.id} {...rapper} removeRappers={removeRappers} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Rappers;
