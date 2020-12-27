require('express-async-errors')
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const router = require('./router');
const error = require('./middlewares/error');

mongoose
  .connect('mongodb://localhost/auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(morgan('combined'));

app.use(router);

app.use(error);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is listening on ${port}`));
