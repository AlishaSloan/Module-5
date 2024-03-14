const express = require("express"); // import the express package
const friendRoutes = require('./routes/friendRoutes');

const app = express(); 
const port = 3000; 


app.use(express.json());

app.use('/', express.static('public'))
app.use('/friends', friendRoutes);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});