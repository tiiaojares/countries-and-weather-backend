const axios = require('axios');
const express = require('express');
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(cors());

app.get('/countries', async (req, res) => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        res.json(response.data);
    }catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error')
    }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
