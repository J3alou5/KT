const express = require('express');
const cors = require('cors');
const fs = require('fs').promises; 
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(cors());
app.use(express.json()); 

app.get('/meals', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'data', 'meals.json');
    const data = await fs.readFile(dataPath, 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    console.error('Error reading meals.json file:', err);
    res.status(500).send('Error reading meals.json file');
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
