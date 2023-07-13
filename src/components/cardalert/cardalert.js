import React from 'react';
import "../cardalert/cardalert.css"

const CardAlert = ({ label }) => {
  const Click = () => {
    alert(`A label desse botão é ${label}`);
  };

  return (
    <button className='alert' onClick={Click}>{label}</button>
  );
};

export default CardAlert;