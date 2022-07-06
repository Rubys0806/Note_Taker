const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./db/db")

const PORT = process.env.PORT || 3001;
const app = express();
const Routes = require('./routes/noteRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/Develop', Routes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
