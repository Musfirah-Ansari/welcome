import React from 'react'

const CurrentDateTime = () => {
  const currentDateTime = new Date().toLocaleString();

  return (
    <div>
      <h2>Showing here the Current Date and Time: {currentDateTime}</h2>
    </div>
  );
};

export default CurrentDateTime
