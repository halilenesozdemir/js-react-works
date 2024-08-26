import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from './Loading';
import Rappers from './Rappers';

const url = 'https://api.jsonbin.io/b/62af39be5c2a444a2d90d435/1';

function App() {
  const [loading, setLoading] = useState(true);
  const [rappers, setRappers] = useState([]);

  const removeRappers = id => {
    const newRappers = rappers.filter(rapper => rapper.id !== id);
    setRappers(newRappers);
  };

  const fetchRappers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const rappers = await response.json();
      setLoading(false);
      setRappers(rappers);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRappers();
  }, []);

  if (loading) {
    return (
      <>
        <main>
          <Loading />
        </main>
      </>
    );
  }
  if (rappers.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No rappers left...</h2>
          <button className='btn' onClick={() => fetchRappers()}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <>
      <main>
        <Rappers rappers={rappers} removeRappers={removeRappers} />
      </main>
    </>
  );
}

export default App;
