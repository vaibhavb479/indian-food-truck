// const express = require('express');
// const bodyParser = require('body-parser');
// const pino = require('express-pino-logger')();

// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(pino);

// app.get('/api/greeting', (req, res) => {
//   const name = req.query.name || 'World';
//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// app.listen(3001, () =>
//   console.log('Express server is running on localhost:3001')
// );


const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const client = require('twilio')(
  ACa07455b12562d4c2c48aa581f867cf6b,
  b58d69ee7ad46d66eca58574c48d04e9
);
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);

app.post('/api/messages', (req, res) => {
  debugger;
  res.header('Content-Type', 'application/json');
  client.messages
    .create({
      from: 15075933721,
      to: 'bhagyashrijaware30@gmail.com',
      body: 'orderplaced'
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});