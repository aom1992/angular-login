const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const login = require('./login');

const app = express();
const port = 3030;

app.use(bodyParser.json());
app.use(cors());

app.use(login);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});