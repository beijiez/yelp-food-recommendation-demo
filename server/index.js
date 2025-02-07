const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const YELP_API_KEY = 'g7TstR-cYAbBTmi4rClbbjnzBOvdsYiS_c65eUCTEaCFo6dvwI0iz9CA9TT9tq0RORnaG3vAQkBaIazSvXg2HpocaPuV-DkkMf0ZvdjnhePlR4UOxmJ0VP70FZajZ3Yx';
const YELP_API_URL = 'https://api.yelp.com/v3/businesses/search';

app.get('/restaurants', async (req, res) => {
    const { location, cuisine, limit } = req.query;

    try {
        const response = await axios.get(YELP_API_URL, {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            },
            params: {
                location,
                categories: cuisine,
                limit
            }
        });

        const restaurants = response.data.businesses.map(business => ({
            name: business.name,
            rating: business.rating,
            price: business.price,
            url: business.url
        }));

        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});