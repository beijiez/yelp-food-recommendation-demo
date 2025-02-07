import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [location, setLocation] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [limit, setLimit] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]); // Clear previous errors

    try {
      const response = await fetch(`http://localhost:3000/restaurants?location=${location}&cuisine=${cuisine}&limit=${limit}`);
      const data = await response.json();

      if (response.ok) {
        setRestaurants(data);
      } else {
        setErrors(data.errors);
      }
    } catch (error) {
      setErrors([error.message]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={handleSubmit}>
          <div>
            <label>Location:</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
          </div>
          <div>
            <label>Cuisine:</label>
            <input type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
          </div>
          <div>
            <label>Limit:</label>
            <input type="number" value={limit} onChange={(e) => setLimit(e.target.value)} />
          </div>
          <button type="submit">Search</button>
        </form>
        {errors.length > 0 && (
          <div className="errors">
            {errors.map((error, index) => (
              <p key={index} style={{ color: 'red' }}>{error}</p>
            ))}
          </div>
        )}
        <div>
          {restaurants.map((restaurant) => (
            <div key={restaurant.url}>
              <h2>{restaurant.name}</h2>
              <p>Rating: {restaurant.rating}</p>
              <p>Price: {restaurant.price}</p>
              <a href={restaurant.url} target="_blank" rel="noopener noreferrer">Visit</a>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
