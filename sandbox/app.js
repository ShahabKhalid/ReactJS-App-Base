const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/members');
const cors = require('cors');


const app = express();
app.use(cors());
const PORT = 9080;

// body parser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


routes(app);


app.get('/', (req, res) =>
  res.send(`Please call /members for now :)`)
)

app.listen(PORT, () =>
  console.log(`Sandbox is running at http://localhost:${PORT}`)
)