const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.json());


app.use(express.static('public'));


const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
