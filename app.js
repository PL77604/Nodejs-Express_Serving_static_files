const express = require('express');
const app = express();
const port = 3000;

const imie = "Arsen";
const nazwisko = "Medvid";
const numerIndeksu = "77604";

app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
  res.json({
    imie: imie,
    nazwisko: nazwisko,
    numerIndeksu: numerIndeksu
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});