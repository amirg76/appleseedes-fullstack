const express = require('express');
const cors = require('cors');
const path = require('path');

const publicDirPath = path.join(__dirname, 'client/build');
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.static(publicDirPath));

app.get('/api/users', (req, res) => {
  try {
    res.status(200).send({ name: 'bob', age: '40' });
  } catch (err) {
    res.status(404);
    res.send(err.message);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Server running on port ' + PORT);
});
