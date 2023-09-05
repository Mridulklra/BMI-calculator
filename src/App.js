import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert('Please enter valid values');
    } else {
      // Convert height to meters from centimeters
      const heightInMeters = height / 100;
      
      // Calculate BMI using weight in kilograms and height in meters
      let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmi);

      if (bmi < 18.5) {
        setMessage('You are underweight');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are healthy');
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage('You are overweight');
      } else {
        setMessage('You are obese');
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>BMI Calculator</h1>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input
              type="text"
              placeholder="Enter your weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (cm)</label>
            <input
              type="text"
              placeholder="Enter your height (cm)"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div className="button-container">
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='button' onClick={reload}>Reload</button>
          </div>
          <div>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
