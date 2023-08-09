
const express = require('express');
const api = require ('./routes/apiroute');
const html = require ('./routes/htmlroute');
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//api
app.use('/api', api);

//html
app.use('/', html);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`));