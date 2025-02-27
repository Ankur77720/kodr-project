const express = require('express');
const app = express();
const postsRoutes = require("./routes/posts.routes")
const userRoutes = require('./routes/users.routes.js');
const cookieParser = require('cookie-parser');

const cors = require('cors');

app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/api/users', userRoutes);
app.use('/v1/api/posts', postsRoutes);



module.exports = app