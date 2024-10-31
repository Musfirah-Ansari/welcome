import React from 'react';
import logo from '../logo.png';

const ImageComponent = () => {
  return (
    <div>
      <img src={logo} alt="Description" style={{ width: '300px' }} />

      {/* Another technique of placing logo from URL directly */}
      
{/*       <img src="https://www.bankalfalah.com/wp-content/uploads/2023/06/BAFL-LOGO-ai-1-2-400x400-1.png" alt="Description" style={{ width: '300px' }} />
 */}
    </div>
  );
};

export default ImageComponent;
