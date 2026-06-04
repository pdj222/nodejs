// app.js
const path = require('node:path');
const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.send('[GET] test');
});

app.post('/', (req, res) => {
  console.log('req.body: ', req.body);
  res.send('[POST] test');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});