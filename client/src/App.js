import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function RestaurantForm() {
  const [location, setLocation] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [limit, setLimit] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/restaurants', {
        params: {
          location,
          cuisine,
          limit
        }
      });
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Cuisine:</label>
          <input
            type="text"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          />
        </div>
        <div>
          <label>Limit:</label>
          <input
            type="number"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>
      <div>
        {restaurants.map((restaurant) => (
          <div key={restaurant.url}>
            <h3>{restaurant.name}</h3>
            <p>Rating: {restaurant.rating}</p>
            <p>Price: {restaurant.price}</p>
            <a href={restaurant.url} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantForm;
