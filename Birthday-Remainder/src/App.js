import React from 'react';
import { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };

  const loadData = () => {
    setPeople(data);
  };

  return (
    <>
      <main>
        <section className='container'>
          <h3>{people.length} Birthdays Today</h3>
          <List people={people} />
          <button onClick={() => clearAll()}>Clear All</button>
          <button onClick={() => loadData()}>Load Data</button>
        </section>
      </main>
    </>
  );
}

export default App;
