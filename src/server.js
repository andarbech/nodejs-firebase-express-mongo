const express = require('express');
const { json } = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('./config/config');
const cors = require('cors');

//insert Ruotes 
const { UserRouter } = require("./routes");

const app = express();

app.use(json());
app.use(morgan('dev'));
app.use(helmet());


app.get('/', (req, res) => {
    res.status(200).send({
        data: "hello carapapilla"
    })
});

app.use(
  cors({
    origin: config.client.URL,
  }),
);

app.use("/users", UserRouter);


module.exports = app

