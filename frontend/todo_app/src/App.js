import React, { useState } from 'react';
import axios from 'axios';
import './App.css';



function App() {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    axios
      .get(`/char_count?text=${text}`)
      .then(({ data }) => {
        setCharCount(`¡Posee ${data.count} caracteres!`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <h1>Contador de caracteres</h1>
      <div className="input-container">
        <label htmlFor="char-input">Cuántos caracteres</label>
        <input
          id="char-input"
          type="text"
          value={text}
          placeholder='Ingresa tu palabra aquí'
          onChange={handleInputChange}
        />
        <label htmlFor="char-input">tiene?</label>
        
      </div>
      <div>
      <button onClick={handleSubmit}>Contar</button>
      </div>
      <div>
        <h3 id="char-count">{charCount}</h3>
      </div>
    </div>
 
    
  );
}

export default App;
