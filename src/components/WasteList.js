import React from 'react';
import './WasteList.css';

const WasteList = ({ wastes, deleteWaste }) => {
  return (
    <div className='waste-list'>
      {wastes.map((waste) => (
        <div key={waste.id} className='waste-item'>
          <p className='waste-name'>Material Name: {waste.materialName}</p>
          <p className='waste-quantity'> Quantity: {waste.quantity} kg</p>
          <button
            onClick={() => deleteWaste(waste.id)}
            className='delete-button'
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default WasteList;
