const express = require('express');
const app = express();
const userRoutes = require('./routes/users.routes.js');

const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/api/users', userRoutes);





module.exports = app