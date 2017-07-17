const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(morgan('common'));
app.use(express.static('public'));

const blogApiRouter = require('./blogApiRouter');




app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


app.use('/blog-posts', blogApiRouter);


app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});