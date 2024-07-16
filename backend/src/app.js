require('dotenv').config();
const express = require('express');
const weatherRouter = require('./routes/weather');
const app = express();
const port = 3001;

app.use(express.json());
app.use('/api/weather', weatherRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
