import React from 'react';
import './WasteStats.css';

const WasteStats = ({ wastes }) => {
  const totalWaste = wastes.reduce((acc, waste) => acc + waste.quantity, 0);

  return (
    <div className='waste-stats'>
      <h2>Waste Statistics</h2>
      <p className='total-waste'>Total Waste Generated: {totalWaste} kg</p>
      {/* Add more stats as needed */}
    </div>
  );
};

export default WasteStats;
