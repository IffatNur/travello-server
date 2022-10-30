const express = require('express');
const cors = require('cors') ;

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const places = require('./data/place.json');
const hotels = require('./data/hotels.json');

app.get('/', (req,res) =>{
    res.send('Travello server is running');
})

app.get('/hotels', (req,res)=>{
    res.send(hotels);
})

app.get('/hotels/:id', (req,res) =>{
    const id = req.params.id;
    const hotel = hotels.find(ht => ht.id == id);
    res.send(hotel);
})

app.get('/places', (req,res)=>{
    res.send(places);
})

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
})
