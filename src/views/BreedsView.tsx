import React, { useState, useEffect } from 'react';
import CatTable from '../components/CatTable';
import CatTableToolBar from '../components/CatTableToolBar';
import '../styles/BreedsView.css';

interface Cat {
  'name': string;
  'description': string;
  'temperament': string;
  'origin': string;
}

const BreedsView = () => {

  const [cats, setCats] = useState<Array<Cat>>([]);
  const [tempraments, setTemperaments] = useState<Array<string>>([]);
  const [origins, setOrigins] = useState<Array<string>>([]);

  const getCats = async () => {
    const response = await fetch('/breeds/');
    const cats = (await response.json()) as Array<Cat>;
    setCats(cats);
    setTemperaments([''].concat(cats.map(cat => cat.temperament)));
    setOrigins([''].concat(cats.map(cat => cat.origin)));
  };

  useEffect(() => {
    getCats();
  }, []);

  return (
    <div className="BreedsView">
      <CatTableToolBar temperaments={tempraments} origins={origins} />
      <CatTable cats={cats} />
    </div>
  );
};

export default BreedsView;
