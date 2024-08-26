import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));
  const [placeholder, setPlaceholder] = useState('#f15025');

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
      setPlaceholder(color.value);
    } catch (error) {
      setError(true);
      console.log(error);
      // when enter the wrong value don't do anything.
      setColor('');
      setPlaceholder('');
    }
    console.log(list);
  };

  return (
    <>
      <section className='container'>
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='color' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025' />
          <input
            type='text'
            placeholder={placeholder}
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />;
        })}
      </section>
    </>
  );
}

export default App;
