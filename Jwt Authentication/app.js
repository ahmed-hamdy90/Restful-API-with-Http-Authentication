'use strict';

// load modules
const express = require('express');
const createError = require('http-errors');

const environment = process.env.NODE_ENV || 'development';
const configuration = require(`./Config/config.${environment}.json`);

const authRouter = require('./Routers/authentication.route');

// initilaize express app
const app = express();

// application's port
const port = process.env.PORT || environment.port;

// aplication body json and url encode
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// application's routes
app.use('/auth', authRouter);
// application handle wrong routes plus Error handler
app.use((err, req, res, next) => {
    res.status(404);
    res.json({});
});

// set express application to listen on spacific port
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
