const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  console.log('GET request received');
});

app.listen(8080, () => console.log('Express server listening on port 8080'));
