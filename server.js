const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('./config');
const auth = require('./auth');

const app = express();
const PORT = 3000;

app.use(express.json());
app.listen(PORT, console.log('server is running on port 3000'));

app.post('/register', (req, res) => {
  const payload = {
    username: req.body.username,
    email: req.body.email,
  };

  const token = jwt.sign(payload, config.jwtSecret, config.jwtOptions);

  const body = {
    username: req.body.username,
    email: req.body.email,
    token: token,
  };

  res.status(200).send(body);
});

app.get('/login', auth, (req, res) => {
  res.status(200).json({
    msg: '承認に成功しました',
  });
});
