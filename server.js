const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


//html
app.use('/api', notestorer)


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`));