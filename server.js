const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Saga Server started on port ${PORT}`));

//https://www.udemy.com/course/mern-stack-front-to-back/learn/lecture/10055140#overview