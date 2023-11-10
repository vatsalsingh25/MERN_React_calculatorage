import React, { useState } from 'react';

const buttonStyle = {
  background: 'blue',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  cursor: 'pointer',
};

const App = () => {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthDate) {
      const birthYear = new Date(birthDate).getFullYear();
      const currentYear = new Date().getFullYear();
      const calculatedAge = currentYear - birthYear;
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h1>Age Calculator</h1>
      <form style={{ textAlign: 'center' }}>
        <label htmlFor="birthDate">Enter your Date of Birth:</label>
        <br />
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          style={{ margin: '10px 0' }}
        />
        <br />
        <button
          type="button"
          onClick={calculateAge}
          style={buttonStyle}
        >
          Calculate Age
        </button>
      </form>
      {age !== null && <p> <b> You are {age} years old.</b></p>}
    </div>
  );
};

export default App;

