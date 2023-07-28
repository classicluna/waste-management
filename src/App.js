import './App.css';
import WasteForm from './components/WasteForm';
import WasteList from './components/WasteList';
import WasteStats from './components/WasteStats';
import Header from './components/Header';
import React, { useState } from 'react';

function App() {
  const [wastes, setWastes] = useState([]);

  const addWaste = (waste) => {
    setWastes([...wastes, waste]);
  };

  const deleteWaste = (wasteId) => {
    setWastes(wastes.filter((waste) => waste.id !== wasteId));
  };

  return (
    <div className='App'>
      <Header />
      <WasteForm addWaste={addWaste} />
      <WasteList wastes={wastes} deleteWaste={deleteWaste} />
      <WasteStats wastes={wastes} />
    </div>
  );
}

export default App;
