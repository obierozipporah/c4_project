import React from 'react';

const App = () => { 

  const colorsLeft = [
    { name: 'Cyan', code: '#2ACFCF', description: 'hsl(180, 66%, 49%)' },
    { name: 'Dark Violet', code: '#3B3054', description: 'hsl(257, 27%, 26%)' },
    { name: 'Red', code: '#F46262'},
    { name: 'Gray-100', code: '#BFBFBF'},
    { name: 'Gray-200', code: '#9E9AA7'},
    { name: 'Gray-300', code: '#35323E'},
    { name: 'Gray-400', code: '#232127'},
  ];

  const colorsRight = [
    { name: 'Gray', description: 'hsl(0, 0%, 75%)' },
    { name: 'Grayish Violet', description: 'hsl(257, 7%, 63%)' },
    { name: 'Very Dark Blue', description: 'hsl(255, 11%, 22%)' },
    { name: 'Very Dark Violet', description: 'hsl(260, 8%, 14%)' },
  ];

  return (
    <div className="container">
      <div className="left-section">
        <div className="color-column">
          {colorsLeft.map((color, index) => (
            <div key={index} className="color-item">
              <div className="color-icon" style={{ backgroundColor: color.code }}></div>
              <p>{color.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="center-section">
        <ul>
          <li>Cyan: hsl(180, 66%, 49%)</li>
          <li>Dark Violet: hsl(257, 27%, 26%)</li>
        </ul>
      </div>
      <div className="right-section">
        <div className="color-list">
          <ul>
            {colorsRight.map((color, index) => (
              <li key={index}>{color.name}: {color.description}</li>
            ))}
          </ul>
        </div>
        <div className="additional-text">
          <p>(257, 27%, 26%)</p>
          <p>Red: hsl(0, 87%, 67%)</p>
        </div>
      </div>
    </div>
  );
};

export default App;