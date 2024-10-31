//Pairing With Syed Hamza Ahmed Bukhari

import React from 'react';
import CurrentDateTime from './CurrentDateTime';
import Name from './Name';
import ImageComponent from './ImageComponent';
import './App.css';


function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <CurrentDateTime />
      <Name />
      <ImageComponent/>
    </div>
  );
}

export default App;
