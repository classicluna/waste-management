import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './WasteForm.css';

const WasteForm = ({ addWaste }) => {
  const [materialName, setMaterialName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!materialName || !quantity) return;

    const newWaste = {
      id: uuidv4(),
      materialName,
      quantity: Number(quantity),
    };

    addWaste(newWaste);
    setMaterialName('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit} className='waste-form'>
      <input
        type='text'
        placeholder='Material Name'
        value={materialName}
        onChange={(e) => setMaterialName(e.target.value)}
      />
      <input
        type='number'
        placeholder='Quantity (in kg)'
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type='submit'>Add Waste</button>
    </form>
  );
};

export default WasteForm;
