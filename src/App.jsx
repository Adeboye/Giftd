import React from 'react';
import underConstruction from './assets/under_construction.png'

function App() {
  const imgStyle = {
    width: '100%',
    height: '100%'
  };

  return (
    <div className="App">
      <img src={underConstruction} alt="under construction" style={imgStyle}/>
    </div>
  );
}

export default App;
